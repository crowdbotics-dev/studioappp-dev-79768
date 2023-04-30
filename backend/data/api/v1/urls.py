
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import StoryboardViewSet
router = DefaultRouter()
router.register('storyboard', StoryboardViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
