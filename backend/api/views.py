from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets, permissions
from rest_framework.response import Response
from .models import *
from .serializers import *
from django.contrib.auth.models import User
from rest_framework import generics

def home(request):
    return HttpResponse("This is the home page")


class AddAuctionViewSet(viewsets.ModelViewSet):
    queryset = AddAuction.objects.all()
    serializer_class = AddAuctionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

# class AddAuctionViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = AddAuction.objects.all()
#     serializer_class = AddAuctionSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)
        

#     def retrieve(self, request, pk=None):
#         auction = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(auction)
#         return Response(serializer.data)

#     def update(self, request, pk=None):
#         auction = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(auction, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)

#     def destroy(self, request, pk=None):
#         auction = self.queryset.get(pk=pk)
#         auction.delete()
#         return Response(status=204)

class AddPlayerViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = AddPlayer.objects.all()
    serializer_class = AddPlayerSerializer

    # def perform_create(self, serializer):
    #     auction_id = self.request.data.get('auction')
    #     try:
    #         auction = AddAuction.objects.get(id=auction_id, user=self.request.user)
    #         serializer.save(auction=auction)
    #     except AddAuction.DoesNotExist:
    #         raise serializers.ValidationError("Auction not found or you do not have permission to add players to this auction.")

# class AddPlayerViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = AddPlayer.objects.all()
#     serializer_class = AddPlayerSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)
        
#     def retrieve(self, request, pk=None):
#         player = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(player)
#         return Response(serializer.data)

#     def update(self, request, pk=None):
#         player = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(player, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)

#     def destroy(self, request, pk=None):
#         player = self.queryset.get(pk=pk)
#         player.delete()
#         return Response(status=204)


class AddTeamViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = AddTeam.objects.all()
    serializer_class = AddTeamSerializer    

    # def perform_create(self, serializer):
    #     auction_id = self.request.data.get('auction')
    #     try:
    #         auction = AddAuction.objects.get(id=auction_id, user=self.request.user)
    #         serializer.save(auction=auction)
    #     except AddAuction.DoesNotExist:
    #         raise serializers.ValidationError("Auction not found or you do not have permission to add players to this auction.")
        
# class AddTeamViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = AddTeam.objects.all()
#     serializer_class = AddTeamSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)
        

#     def retrieve(self, request, pk=None):
#         team = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(team)
#         return Response(serializer.data)

#     def update(self, request, pk=None):
#         team = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(team, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)

#     def destroy(self, request, pk=None):
#         team = self.queryset.get(pk=pk)
#         team.delete()
#         return Response(status=204)
    

class AddSponserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = AddSponsers.objects.all()
    serializer_class = AddSponserSerializer

    # def perform_create(self, serializer):
    #     auction_id = self.request.data.get('auction')
    #     try:
    #         auction = AddAuction.objects.get(id=auction_id, user=self.request.user)
    #         serializer.save(auction=auction)
    #     except AddAuction.DoesNotExist:
    #         raise serializers.ValidationError("Auction not found or you do not have permission to add players to this auction.")

# class AddSponserViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = AddSponsers.objects.all()
#     serializer_class = AddSponserSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)
        

#     def retrieve(self, request, pk=None):
#         sponser = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(sponser)
#         return Response(serializer.data)

#     def update(self, request, pk=None):
#         sponser = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(sponser, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)

#     def destroy(self, request, pk=None):
#         team = self.queryset.get(pk=pk)
#         team.delete()
#         return Response(status=204)
    
class DashboardViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = Dashboard.objects.all()
    serializer_class = DashboardSerializer

    # def perform_create(self, serializer):
    #     auction_id = self.request.data.get('auction')
    #     try:
    #         auction = AddAuction.objects.get(id=auction_id, user=self.request.user)
    #         serializer.save(auction=auction)
    #     except AddAuction.DoesNotExist:
    #         raise serializers.ValidationError("Auction not found or you do not have permission to add players to this auction.")

# class DashboardViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = Dashboard.objects.all()
#     serializer_class = DashboardSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def retrieve(self, request, pk=None):
#         dashboard = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(dashboard)
#         return Response(serializer.data)
    
class AuctionResultViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    queryset = AuctionResult.objects.all()
    serializer_class = AuctionResultSerializer

    # def perform_create(self, serializer):
    #     auction_id = self.request.data.get('auction')
    #     try:
    #         auction = AddAuction.objects.get(id=auction_id, user=self.request.user)
    #         serializer.save(auction=auction)
    #     except AddAuction.DoesNotExist:
    #         raise serializers.ValidationError("Auction not found or you do not have permission to add players to this auction.")

# class AuctionResultViewSet(viewsets.ModelViewSet):
#     permission_classes = [permissions.IsAuthenticated]
#     queryset = AuctionResult.objects.all()
#     serializer_class = AuctionResultSerializer

#     def list(self, request):
#         queryset = self.queryset
#         serializer = self.serializer_class(queryset, many=True)
#         return Response(serializer.data)

#     def create(self, request):
#         serializer = self.serializer_class(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)
        
#     def retrieve(self, request, pk=None):
#         result = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(result)
#         return Response(serializer.data)

#     def update(self, request, pk=None):
#         result = self.queryset.get(pk=pk)
#         serializer = self.serializer_class(result, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         else:
#             return Response(serializer.errors, status=400)

#     def destroy(self, request, pk=None):
#         result = self.queryset.get(pk=pk)
#         result.delete()
#         return Response(status=204)
    

class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]