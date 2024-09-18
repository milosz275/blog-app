import debug_toolbar
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from django.shortcuts import redirect
from drf_spectacular.views import (
    SpectacularAPIView,
    SpectacularRedocView,
    SpectacularSwaggerView,
)

urlpatterns = [
    path("__debug__/", include(debug_toolbar.urls)),
    path("admin/", admin.site.urls),
    path("user/", include("users.urls")),
    path("posts/", include("posts.urls")),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path(
        "schema/redoc/", SpectacularRedocView.as_view(url_name="schema"), name="redoc"
    ),
    path("favicon.ico", lambda _: redirect("static/favicon.ico", permanent=True)),
    path("", lambda _: redirect("admin/", permanent=True)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
