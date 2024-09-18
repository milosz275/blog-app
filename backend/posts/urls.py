from django.urls import path
from posts.views import (
    BlogPostCreateView,
    BlogPostUpdateView,
    BlogPostListView,
    BlogPostDetailView,
    BlogPostDeleteView,
    BlogPostLikeView,
    BlogPostUnlikeView,
    BlogPostCommentView,
    BlogPostCommentDeleteView,
)

urlpatterns = [
    path("create/", BlogPostCreateView.as_view()),
    path("update/<pk>", BlogPostUpdateView.as_view()),
    path("list/", BlogPostListView.as_view()),
    path("detail/<pk>", BlogPostDetailView.as_view()),
    path("delete/<pk>", BlogPostDeleteView.as_view()),
    path("like/<pk>", BlogPostLikeView.as_view()),
    path("unlike/<pk>", BlogPostUnlikeView.as_view()),
    path("comment/<pk>", BlogPostCommentView.as_view()),
    path("comment/delete/<pk>", BlogPostCommentDeleteView.as_view()),
]
