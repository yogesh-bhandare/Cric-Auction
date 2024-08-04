from rest_framework import viewsets
from .models import *
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.permissions import IsAuthenticated, AllowAny


class AddAuctionViewSet(viewsets.ModelViewSet):
    queryset = AddAuction.objects.all()
    serializer_class = AddAuctionSerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

    def get_queryset(self):
        return AddAuction.objects.filter(user=self.request.user)


class AddPlayerViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = AddPlayer.objects.all()
    serializer_class = AddPlayerSerializer

    # def get_queryset(self):
    #     return AddPlayer.objects.filter(auction__user=self.request.user)
    
    # def perform_create(self, serializer):
    #     auction = self.request.data.get('auction')
    #     print(auction)
    #     if auction:
    #         auction_instance = AddAuction.objects.get(id=auction)
    #         serializer.save(auction=auction_instance)
    #     else:
    #         serializer.save()


class AddTeamViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = AddTeam.objects.all()
    serializer_class = AddTeamSerializer  

    # def get_queryset(self):
    #     return AddPlayer.objects.filter(auction__user=self.request.user)  

    # def perform_create(self, serializer):
    #     auction = self.request.data.get('auction')
    #     if auction:
    #         auction_instance = AddAuction.objects.get(id=auction)
    #         serializer.save(auction=auction_instance)
    #     else:
    #         serializer.save()

class AddSponserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = AddSponsers.objects.all()
    serializer_class = AddSponserSerializer

    # def get_queryset(self):
    #     return AddPlayer.objects.filter(auction__user=self.request.user)

    # def perform_create(self, serializer):
    #     auction = self.request.data.get('auction')
    #     if auction:
    #         auction_instance = AddAuction.objects.get(id=auction)
    #         serializer.save(auction=auction_instance)
    #     else:
    #         serializer.save()

class DashboardViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer

    # def get_queryset(self):
    #     return Dashboard.objects.filter(auctions__user=self.request.user)
    
class AuctionResultViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = AuctionResult.objects.all()
    serializer_class = AuctionResultSerializer

    # def get_queryset(self):
    #     return AddPlayer.objects.filter(auction__user=self.request.user)

    # def perform_create(self, serializer):
    #     auction = self.request.data.get('auction')
    #     if auction:
    #         auction_instance = AddAuction.objects.get(id=auction)
    #         serializer.save(auction=auction_instance)
    #     else:
    #         serializer.save()

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

