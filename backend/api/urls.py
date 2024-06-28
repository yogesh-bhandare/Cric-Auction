from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register("auctions", AddAuctionViewSet, basename="Auction")
router.register("players", AddPlayerViewSet, basename="Player")
router.register("teams", AddTeamViewSet, basename="Team")
urlpatterns = router.urls

# urlpatterns = [
#     path('', home),
# ]
