from rest_framework import serializers
from .models import *

class AddAuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddAuction
        fields = ("auction_logo", "auction_name", "auction_date", "auction_type", "auction_purse", "min_bid", "bid_increase", "players_per_team")

class AddPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddPlayer
        fields = ("player_image", "player_name", "player_type", "origin","base_price", "player_points")

class AddTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddTeam
        fields = ("team_logo", "team_name", "team_username", "purse_amt")
