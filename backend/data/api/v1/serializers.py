from rest_framework import serializers
from data.models import Storyboard

class StoryboardSerializer(serializers.ModelSerializer):

    class Meta:
        model = Storyboard
        fields = "__all__"