import datetime
from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.generics import (
    GenericAPIView,
    CreateAPIView,
    UpdateAPIView,
    ListAPIView,
)
from rest_framework import status
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from posts.models import BlogPost
from django.db.models import Count
from posts.serializers import (
    BlogPostSerializer,
    BlogPostDetailSerializer,
    BlogPostUpdateSerializer,
    BlogPostCreateSerializer,
    BlogPostDeleteSerializer,
)


class BlogPostCreateView(CreateAPIView):
    serializer_class = BlogPostCreateSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class BlogPostUpdateView(UpdateAPIView):
    serializer_class = BlogPostUpdateSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user != request.user:
            return Response(
                {"detail": "You do not have permission to update this post."},
                status=status.HTTP_403_FORBIDDEN,
            )
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)


class BlogPostDeleteView(APIView):
    serializer_class = BlogPostDeleteSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk: int):
        instance = get_object_or_404(BlogPost, pk=pk)
        if instance.user != request.user:
            return Response(
                {"detail": "You do not have permission to delete this post."},
                status=status.HTTP_403_FORBIDDEN,
            )
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class BlogPostListView(ListAPIView):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [AllowAny]


class BlogPostDetailView(APIView):
    serializer_class = BlogPostDetailSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [AllowAny]

    def get(self, request, pk: int):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)


class BlogPostLikeView(APIView):
    serializer_class = BlogPostDetailSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, pk: int):
        post = get_object_or_404(BlogPost, pk=pk)
        post.likes.add(request.user)
        return Response({"detail": "Post liked."}, status=status.HTTP_200_OK)


class BlogPostUnlikeView(APIView):
    serializer_class = BlogPostDetailSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, pk: int):
        post = get_object_or_404(BlogPost, pk=pk)
        post.likes.remove(request.user)
        return Response({"detail": "Post unliked."}, status=status.HTTP_200_OK)


class BlogPostCommentView(GenericAPIView):
    serializer_class = BlogPostDetailSerializer
    permission_classes = [IsAuthenticated]

    def post(self, request, pk: int):
        post = get_object_or_404(BlogPost, pk=pk)
        comment = request.data.get("comment")
        if not comment:
            return Response(
                {"detail": "Comment cannot be empty."},
                status=status.HTTP_400_BAD_REQUEST,
            )
        post.comments.create(user=request.user, content=comment)
        return Response({"detail": "Comment added."}, status=status.HTTP_201_CREATED)


class BlogPostCommentDeleteView(APIView):
    serializer_class = BlogPostDetailSerializer
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk: int, comment_id: int):
        post = get_object_or_404(BlogPost, pk=pk)
        comment = get_object_or_404(post.comments, id=comment_id, user=request.user)
        comment.delete()
        return Response(
            {"detail": "Comment deleted."}, status=status.HTTP_204_NO_CONTENT
        )


class RecentPostsView(ListAPIView):
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return BlogPost.objects.order_by("-created_at")[:10]


class TrendingPostsView(ListAPIView):
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        one_week_ago = datetime.datetime.now() - datetime.timedelta(days=7)

        # first criteria: posts with comments in the last week
        queryset = (
            BlogPost.objects.filter(comments__created_at__gte=one_week_ago)
            .annotate(comment_count=Count("comments"))
            .order_by("-comment_count")[:10]
        )

        if queryset.count() >= 4:
            return queryset

        # second criteria: posts with comments in the last month
        one_month_ago = datetime.datetime.now() - datetime.timedelta(days=30)
        queryset = (
            BlogPost.objects.filter(comments__created_at__gte=one_month_ago)
            .annotate(comment_count=Count("comments"))
            .order_by("-comment_count")[:10]
        )

        if queryset.count() >= 4:
            return queryset

        # third criteria: top liked posts
        queryset = BlogPost.objects.annotate(like_count=Count("likes")).order_by(
            "-like_count"
        )[:10]

        return queryset


class PopularPostsView(ListAPIView):
    serializer_class = BlogPostSerializer
    permission_classes = [AllowAny]

    def get_queryset(self):
        return BlogPost.objects.annotate(like_count=Count("likes")).order_by(
            "-like_count"
        )[:10]
