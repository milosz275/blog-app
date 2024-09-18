from rest_framework import serializers
from posts.models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = [
            "id",
            "title",
            "description",
            "image_data",
            "updated_at",
            "created_at",
        ]


class BlogPostDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = [
            "id",
            "title",
            "description",
            "image_data",
            "content",
            "updated_at",
            "created_at",
        ]


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
