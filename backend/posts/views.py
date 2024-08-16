from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from posts.models import BlogPost
from posts.serializers import BlogPostSerializer, BlogPostDetailSerializer, BlogPostUpdateSerializer, BlogPostCreateSerializer, BlogPostDeleteSerializer

class BlogPostCreateView(CreateAPIView):
    serializer_class = BlogPostCreateSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]
    
    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class BlogPostUpdateView(UpdateAPIView):
    serializer_class = BlogPostUpdateSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]
    
    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)

class BlogPostListView(APIView):
    serializer_class = BlogPostSerializer
    queryset = BlogPost.objects.all()
    
    def get(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BlogPostDetailView(APIView):
    serializer_class = BlogPostDetailSerializer
    queryset = BlogPost.objects.all()
    
    def get(self, request, pk):
        instance = self.queryset.get(pk=pk)
        serializer = self.serializer_class(instance)
        return Response(serializer.data, status=status.HTTP_200_OK)

class BlogPostDeleteView(APIView):
    serializer_class = BlogPostDeleteSerializer
    queryset = BlogPost.objects.all()
    permission_classes = [IsAuthenticated]
    
    def delete(self, request, pk):
        instance = self.queryset.get(pk=pk)
        instance.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class BlogPostLikeView(APIView):
    pass

class BlogPostUnlikeView(APIView):
    pass

class BlogPostCommentView(APIView):
    pass

class BlogPostCommentDeleteView(APIView):
    pass
