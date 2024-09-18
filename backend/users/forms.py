import base64
from datetime import date
from django import forms
from django.core.exceptions import ValidationError
from .models import UserProfile


class UserProfileAdminForm(forms.ModelForm):
    image_file = forms.FileField(required=False)

    class Meta:
        model = UserProfile
        fields = "__all__"
        widgets = {
            "birth_date": forms.DateInput(attrs={"type": "date"}),
        }

    def clean_birth_date(self):
        birth_date = self.cleaned_data.get("birth_date")
        if birth_date and birth_date > date.today():
            raise ValidationError("Birth date cannot be in the future.")
        return birth_date

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
