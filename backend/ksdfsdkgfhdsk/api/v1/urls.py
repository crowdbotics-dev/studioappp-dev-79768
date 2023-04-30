
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import KJFHFJKFViewSet
router = DefaultRouter()
router.register('kjfhfjkf', KJFHFJKFViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
