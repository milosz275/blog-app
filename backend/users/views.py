import datetime
from django.contrib.auth.models import User
from django.contrib.auth.password_validation import validate_password
from django.forms import EmailField
from django.core.exceptions import ValidationError
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.generics import CreateAPIView, UpdateAPIView, GenericAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from users.models import UserProfile
from users.serializers import (
    UserSerializer,
    UserProfileSerializer,
    UserProfileUpdateSerializer,
    UserExistsSerializer,
)


def isEmailAddressValid(email):
    try:
        EmailField().clean(email)
        return True
    except ValidationError:
        return False


def isPasswordValid(password):
    try:
        validate_password(password)
        return True
    except:
        return False


class UserExistsView(GenericAPIView):
    # Check if a user with the given email address exists
    serializer_class = UserExistsSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        email = request.data.get("email")
        if not isEmailAddressValid(email):
            return Response(
                {"email": ["Provided email is not valid."]},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(username=email).exists():
            return Response({"exists": True}, status=status.HTTP_200_OK)
        else:
            return Response({"exists": False}, status=status.HTTP_200_OK)


class LoginView(TokenObtainPairView):
    def post(self, request, *args, **kwargs):
        username = request.data.get("username", "")
        if not isEmailAddressValid(username):
            return Response(
                {"detail": "Invalid email address."}, status=status.HTTP_400_BAD_REQUEST
            )
        return super().post(request, *args, **kwargs)


class RegisterView(CreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def perform_create(self, serializer):
        user = serializer.save()
        user.set_password(serializer.validated_data["password"])
        user.save()

    def create(self, request):
        email = request.data.get("username")
        password = request.data.get("password")

        if not isEmailAddressValid(email):
            return Response(
                {"username": ["Provided username is not an email."]},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if not isPasswordValid(password):
            return Response(
                {"password": ["Provided password is not valid."]},
                status=status.HTTP_400_BAD_REQUEST,
            )

        super().create(request)
        return Response(
            {"message": "User created successfully"}, status=status.HTTP_201_CREATED
        )


class UserProfileRetrieveByTokenView(APIView):
    permission_classes = [IsAuthenticated]

    serializer_class = UserProfileSerializer
    queryset = UserProfile.objects.all()

    def get(self, request):
        profile = UserProfile.objects.get(user=request.user)
        serializer = self.serializer_class(profile)
        return Response(serializer.data)


class UserProfileUpdateView(UpdateAPIView):
    permission_classes = [IsAuthenticated]

    serializer_class = UserProfileUpdateSerializer
    queryset = UserProfile.objects.all()

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        if instance.user == self.request.user:
            instance.updated_at = datetime.datetime.now()
            instance.save()

            super().update(request, *args, **kwargs)
            return Response(
                {"detail": "Profile updated successfully."},
                status=status.HTTP_204_NO_CONTENT,
            )
        else:
            return Response(
                status=status.HTTP_404_NOT_FOUND,
            )
