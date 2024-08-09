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
    serializer_class = AddPlayerSerializer

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        return AddPlayer.objects.filter(auction__in=user_auctions)
    

class AddTeamViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AddTeamSerializer  

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        return AddTeam.objects.filter(auction__in=user_auctions)
    

class AddSponserViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AddSponserSerializer

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        return AddSponsers.objects.filter(auction__in=user_auctions)
    


class DashboardViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = DashboardSerializer

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        return Dashboard.objects.filter(auction__in=user_auctions)
    

    
class AuctionResultViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AuctionResultSerializer

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        queryset = AuctionResult.objects.filter(auction__in=user_auctions)
        
        return queryset
    
class BidIncrementViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = BidIncrementSerializer
    # queryset = BidIncrement.objects.all()

    def get_queryset(self):
        user = self.request.user
        user_auction = AddAuction.objects.filter(user=user)
        return BidIncrement.objects.filter(auction__in=user_auction) 

class AuctionResultTeamViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = AuctionTeamSerializer

    def get_queryset(self):
        user = self.request.user
        user_auctions = AddAuction.objects.filter(user=user)
        queryset = AuctionResult.objects.filter(auction__in=user_auctions)

        team_id = self.request.query_params.get('team_id')
        if team_id:
            queryset = queryset.filter(team=team_id)
        
        return queryset
    
    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]

