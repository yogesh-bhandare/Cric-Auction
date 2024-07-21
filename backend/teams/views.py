from django.shortcuts import render, redirect
from api.models import AuctionResult
from .forms import Register, Login
from django.contrib.auth.models import User
from django.contrib.auth import login as auth_login, logout, authenticate

# Create your views here.
def TeamSummary(request):
    queryset = AuctionResult.objects.all()
    print(queryset)
    context = {'result':queryset}
    return render(request, 'team.html', context)

def registerView(request):
    if request.method == 'POST':
        form = Register()
        if form.is_valid():
            username = form.cleaned_data['username']
            # password = form.changed_data['password1']
            # print(username, password)
            if User.objects.filter(username=username).exists():
                return redirect('/login/')
            else:
                user = form.save(commit=False)
                user = user.set_password(form.cleaned_data['password1'])
                # User.objects.create(username=username, )
                user.save()
                auth_login(request, user)
                return redirect('/')
        else:
            print(form.errors)
    form = Register()
    context = {'register':form}
    return render(request, 'teamregistration.html', context)

def loginView(request):
    if request.method == 'POST':
        form = Login()
    return render(request, 'teamlogin.html', {})
