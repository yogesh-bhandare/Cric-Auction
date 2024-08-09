from django.contrib import admin
from .models import AddAuction, AddPlayer, AddTeam, AddSponsers, AuctionResult, BidIncrement


class AddPlayerInline(admin.StackedInline):
    model = AddPlayer
    extra = 1

class AddTeamInline(admin.StackedInline):
    model = AddTeam
    extra = 1

class AddSponserInline(admin.StackedInline):
    model = AddSponsers
    extra = 1

class AuctionResultInline(admin.StackedInline):
    model = AuctionResult
    extra = 1


class AddAuctionAdmin(admin.ModelAdmin):
    list_display = ("id","user", "auction_name", "auction_date", "auction_type", "auction_purse", "min_bid", "bid_increase", "players_per_team", "created", "modified")
    inlines = [AddPlayerInline, AddTeamInline, AddSponserInline,AuctionResultInline]
    search_fields = ("auction_name",)

class AddPlayerAdmin(admin.ModelAdmin):
    list_display = ("id","auction", "player_name", "player_type", "origin", "base_price", "player_points", "created", "modified")
    search_fields = ("player_name",)
    list_filter = ("player_type", "origin", "base_price", "player_points")

class AddTeamAdmin(admin.ModelAdmin):
    list_display = ("id","auction", "team_username", "team_name", "purse_amt", "created", "modified")
    search_fields = ("team_name",)

class AddSponsersAdmin(admin.ModelAdmin):
    list_display = ("id","auction", "sponser_name")

class AuctionResultAdmin(admin.ModelAdmin):
    list_display = ("id","auction", "player", "team", "sold_price", "status")
    search_fields = ("player","team")
    list_filter = ("status",)



admin.site.register(AddAuction, AddAuctionAdmin)
admin.site.register(AddPlayer, AddPlayerAdmin)
admin.site.register(AddTeam, AddTeamAdmin)
admin.site.register(AddSponsers, AddSponsersAdmin)
admin.site.register(AuctionResult, AuctionResultAdmin)
admin.site.register(BidIncrement)
