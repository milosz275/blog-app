from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import (
    LoginView,
    RegisterView,
    UserProfileRetrieveByTokenView,
    UserProfileUpdateView,
)

urlpatterns = [
    path("register/", RegisterView.as_view()),
    path("login/", LoginView.as_view(), name="token_obtain_pair"),
    path("login/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("current/", UserProfileRetrieveByTokenView.as_view()),
    path("update/<pk>", UserProfileUpdateView.as_view()),
]
