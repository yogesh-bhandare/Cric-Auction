from rest_framework import serializers
from django.contrib.auth.models import User
from .models import *

class AddAuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddAuction
        fields = "__all__"
        read_only_fields = ("user",)

class AddPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddPlayer
        fields = "__all__"
        extra_kwargs = {"auction":{"write_only":True}}

class AddTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddTeam
        fields = "__all__"
        extra_kwargs = {"auction":{"write_only":True}}


class AddSponserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddSponsers
        fields = "__all__"
        extra_kwargs = {"auction":{"write_only":True}}


class AuctionResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuctionResult
        fields = '__all__'
        extra_kwargs = {"auction":{"write_only":True}}

class AuctionTeamSerializer(serializers.ModelSerializer):
    # auction = AddAuctionSerializer()
    player = AddPlayerSerializer()
    team = AddTeamSerializer()
    class Meta:
        model = AuctionResult
        fields = '__all__'
        extra_kwargs = {"auction":{"write_only":True}}


        
class DashboardSerializer(serializers.ModelSerializer):
    auctions = AddAuctionSerializer(many=True, read_only=True)
    players = AddPlayerSerializer(many=True, read_only=True)
    teams = AddTeamSerializer(many=True, read_only=True)
    sponsers = AddSponserSerializer(many=True, read_only=True)

    class Meta:
        model = Dashboard
        fields = "__all__"



# Authentication

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "password"]
        extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create_user(**validated_data)
        return user