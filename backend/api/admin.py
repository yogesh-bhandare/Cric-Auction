from django.contrib import admin
from .models import AddAuction, AddPlayer, AddTeam, AddSponsers, AuctionResult


admin.site.register(AddAuction)
admin.site.register(AddPlayer)
admin.site.register(AddTeam)
admin.site.register(AddSponsers)
admin.site.register(AuctionResult)
