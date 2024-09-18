import base64
from django.contrib import admin
from django.urls import reverse
from django.http import HttpResponse
from django.utils.safestring import mark_safe
from .models import BlogPost
from .forms import BlogPostAdminForm


class BlogPostInline(admin.StackedInline):
    model = BlogPost
    fields = [
        "title",
        "description",
        "content",
        "image_file",
        "image_tag",
        "download_image",
    ]
    extra = 0
    readonly_fields = ["image_file", "image_tag", "download_image"]
    exclude = ["image_data"]

    def has_add_permission(self, request, obj):
        return False

    def image_file(self, obj):
        return mark_safe(f'<input type="file" name="image_file" accept="image/png" />')

    image_file.short_description = "Image File"

    def image_tag(self, obj):
        if obj.image_data:
            return mark_safe(
                f'<img src="data:image/png;base64,{obj.image_data}" style="max-height: 100px;"/>'
            )
        return "No image"

    image_tag.short_description = "Image"

    def download_image(self, obj):
        if obj.image_data:
            url = reverse("admin:download_image", args=[obj.pk])
            return mark_safe(f'<a href="{url}">Download Image</a>')
        return "No image to download"

    download_image.short_description = "Download Image"

    def get_urls(self):
        from django.urls import path

        urls = super().get_urls()
        custom_urls = [
            path(
                "download-image/<int:pk>/",
                self.admin_site.admin_view(self.download_image_view),
                name="download_image",
            ),
        ]
        return custom_urls + urls

    def download_image_view(self, request, pk):
        asset_image = self.get_object(request, pk)
        if asset_image and asset_image.image_data:
            image_data = base64.b64decode(asset_image.image_data)
            response = HttpResponse(image_data, content_type="image/png")
            response["Content-Disposition"] = (
                f'attachment; filename="course_asset_image_{pk}.png"'
            )
            return response


class BlogPostAdmin(admin.ModelAdmin):
    form = BlogPostAdminForm
    readonly_fields = ["id", "created_at", "updated_at", "image_tag", "download_image"]

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        form.base_fields["user"].widget.can_add_related = False
        form.base_fields["user"].widget.can_change_related = False
        return form

    def has_add_permission(self, request):
        return False

    def image_tag(self, obj):
        if obj.image_data:
            return mark_safe(
                f'<img src="data:image/png;base64,{obj.image_data}" style="max-height: 200px;"/>'
            )
        return "No image"

    image_tag.short_description = "Image"

    def download_image(self, obj):
        if obj.image_data:
            url = reverse("admin:download_image", args=[obj.pk])
            return mark_safe(f'<a href="{url}">Download Image</a>')
        return "No image to download"

    download_image.short_description = "Download Image"

    fieldsets = (
        (
            None,
            {
                "fields": (
                    "user",
                    "title",
                    "description",
                    "content",
                    "image_file",
                    "image_tag",
                    "download_image",
                )
            },
        ),
        ("Timestamps", {"fields": ("created_at", "updated_at")}),
    )

    def get_urls(self):
        from django.urls import path

        urls = super().get_urls()
        custom_urls = [
            path(
                "download-image/<int:pk>/",
                self.admin_site.admin_view(self.download_image_view),
                name="download_image",
            ),
        ]
        return custom_urls + urls

    def download_image_view(self, request, pk):
        user_profile = self.get_object(request, pk)
        if user_profile and user_profile.image_data:
            image_data = base64.b64decode(user_profile.image_data)
            response = HttpResponse(image_data, content_type="image/png")
            response["Content-Disposition"] = (
                f'attachment; filename="post_image_{pk}.png"'
            )
            return response
        return HttpResponse("No image found.", status=404)


admin.site.register(BlogPost, BlogPostAdmin)
