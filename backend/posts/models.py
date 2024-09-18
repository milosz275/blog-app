from django.db import models


class BlogPost(models.Model):
    user = models.ForeignKey("users.UserProfile", on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, null=True)
    image_data = models.TextField(blank=True, null=True)
    content = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

    def get_image_data(self):
        return self.image_data if self.image_data else ""
