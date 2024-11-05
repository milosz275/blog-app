from rest_framework import serializers
from posts.models import BlogPost
from drf_spectacular.utils import extend_schema_field
from drf_spectacular.types import OpenApiTypes


class BlogPostSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()

    @extend_schema_field(OpenApiTypes.INT)
    def get_likes_count(self, obj):
        return obj.likes.count()

    @extend_schema_field(OpenApiTypes.INT)
    def get_comments_count(self, obj):
        return obj.comments.count()

    class Meta:
        model = BlogPost
        fields = "__all__"


class BlogPostDetailSerializer(serializers.ModelSerializer):
    likes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()

    @extend_schema_field(OpenApiTypes.INT)
    def get_likes_count(self, obj):
        return obj.likes.count()

    @extend_schema_field(OpenApiTypes.INT)
    def get_comments_count(self, obj):
        return obj.comments.count()

    class Meta:
        model = BlogPost
        fields = "__all__"


class BlogPostUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ["title", "description", "content", "image_data"]

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("Title cannot be empty.")
        return value

    def validate_content(self, value):
        if not value:
            raise serializers.ValidationError("Content cannot be empty.")
        return value


class BlogPostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = ["title", "description", "content", "image_data"]

    def validate_title(self, value):
        if not value:
            raise serializers.ValidationError("Title cannot be empty.")
        return value

    def validate_content(self, value):
        if not value:
            raise serializers.ValidationError("Content cannot be empty.")
        return value

    def create(self, validated_data):
        return BlogPost.objects.create(**validated_data)


class BlogPostDeleteSerializer(serializers.Serializer):
    pass
