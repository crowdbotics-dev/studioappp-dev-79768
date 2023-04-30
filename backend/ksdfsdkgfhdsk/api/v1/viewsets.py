from rest_framework import authentication
from ksdfsdkgfhdsk.models import KJFHFJKF
from .serializers import KJFHFJKFSerializer
from rest_framework import viewsets

class KJFHFJKFViewSet(viewsets.ModelViewSet):
    serializer_class = KJFHFJKFSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = KJFHFJKF.objects.all()