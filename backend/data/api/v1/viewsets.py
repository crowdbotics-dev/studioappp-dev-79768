from rest_framework import authentication
from data.models import Storyboard
from .serializers import StoryboardSerializer
from rest_framework import viewsets

class StoryboardViewSet(viewsets.ModelViewSet):
    serializer_class = StoryboardSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Storyboard.objects.all()