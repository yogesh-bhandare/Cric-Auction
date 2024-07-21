from django.urls import path
from .views import TeamSummary, registerView

urlpatterns = [
    path('result/', TeamSummary, name='teamsummary'),
    path('register/', registerView, name="register"),
]
