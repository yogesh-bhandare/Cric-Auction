from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm

class Register(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'password1', 'password2')

class Login(forms.Form):
    username = forms.CharField(max_length=100)
    password = forms.CharField(max_length=100)