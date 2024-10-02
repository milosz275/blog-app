from django.db import models


class BlogPost(models.Model):
    user = models.ForeignKey("users.UserProfile", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image_data = models.TextField(blank=True, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    likes = models.ManyToManyField(
        "users.UserProfile", related_name="post_likes", blank=True
    )
    comments = models.ManyToManyField(
        "BlogPostComment", related_name="post_comments", blank=True
    )

    def __str__(self):
        return self.title

    def get_image_data(self):
        return self.image_data if self.image_data else ""


class BlogPostLike(models.Model):
    user = models.ForeignKey("users.UserProfile", on_delete=models.CASCADE)
    post = models.ForeignKey("BlogPost", on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user} liked {self.post}"


class BlogPostComment(models.Model):
    user = models.ForeignKey("users.UserProfile", on_delete=models.CASCADE)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.content
