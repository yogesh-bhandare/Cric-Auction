from django.shortcuts import render
from api.models import AuctionResult

# Create your views here.
def TeamSummary(request):
    queryset = AuctionResult.objects.all()
    context = {'result':queryset}
    return render(request, 'team.html', context)