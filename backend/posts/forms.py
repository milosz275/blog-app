import base64
from django import forms
from .models import BlogPost

class BlogPostAdminForm(forms.ModelForm):
    image_file = forms.FileField(required=False)

    class Meta:
        model = BlogPost
        fields = "__all__"

    def save(self, commit=True):
        instance = super().save(commit=False)
        image_file = self.cleaned_data.get("image_file")
        if image_file:
            image_content = image_file.read()
            encoded_image = base64.b64encode(image_content).decode("utf-8")
            instance.image_data = encoded_image
        if commit:
            instance.save()
        return instance
    
    def get_image_url(self):
        if self.instance.image_data:
            return f"data:image/png;base64,{self.instance.image_data}"
        return None
