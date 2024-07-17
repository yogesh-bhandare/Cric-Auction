from django.urls import path
from .views import TeamSummary

urlpatterns = [
    path('result/', TeamSummary, name='teamsummary')
]
