from rest_framework import serializers
from .models import *

class AddAuctionSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddAuction
        fields = ("id","auction_logo", "auction_name", "auction_date", "auction_type", "auction_purse", "min_bid", "bid_increase", "players_per_team")

class AddPlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddPlayer
        fields = ("id","player_image", "player_name", "player_type", "origin","base_price", "player_points")

class AddTeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddTeam
        fields = ("id","team_logo", "team_name", "team_username", "purse_amt")

class AddSponserSerializer(serializers.ModelSerializer):
    class Meta:
        model = AddSponsers
        fields = "__all__"

class AuctionResultSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuctionResult
        fields = '__all__'
        
class DashboardSerializer(serializers.ModelSerializer):
    auctions = AddAuctionSerializer(many=True, read_only=True)
    players = AddPlayerSerializer(many=True, read_only=True)
    teams = AddTeamSerializer(many=True, read_only=True)
    sponsers = AddSponserSerializer(many=True, read_only=True)

    class Meta:
        model = Dashboard
        fields = "__all__"

