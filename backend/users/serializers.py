import datetime
from django.contrib.auth.models import User
from rest_framework.fields import SerializerMethodField
from rest_framework import serializers
from drf_spectacular.utils import extend_schema_field
from users.models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    """Serializer for User model used for registration"""

    class Meta:
        model = User
        fields = ["id", "username", "password"]


class UserProfileLimitedSerializer(serializers.ModelSerializer):
    username = SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = ["id", "username"]

    @extend_schema_field(UserSerializer)
    def get_username(self, obj) -> str | None:
        if obj.user:
            return obj.user.username
        else:
            return None


class UserProfileSerializer(serializers.ModelSerializer):
    username = SerializerMethodField()

    class Meta:
        model = UserProfile
        fields = [
            "id",
            "username",
            "image_data",
            "birth_date",
            "updated_at",
            "created_at",
        ]

    @extend_schema_field(UserSerializer)
    def get_username(self, obj) -> str | None:
        if obj.user:
            return obj.user.username
        else:
            return None


class UserProfileUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = ["birth_date", "image_data"]

    def validate_birth_date(self, value):
        if value and value > datetime.date.today():
            raise serializers.ValidationError("Birth date cannot be in the future.")
        return value
