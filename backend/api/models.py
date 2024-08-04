from django.db import models
from django.contrib.auth.models import User

class AddAuction(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Player_CRICKET = 'Cricket'
    Player_VOLLEYBALL = 'VolleyBall'
    Player_FOOTBALL = 'FootBall'
    Player_HOCKEY = 'Hockey'

    Player_CHOICES = [
        (Player_CRICKET, 'Cricket'),
        (Player_VOLLEYBALL, 'VolleyBall'),
        (Player_FOOTBALL, 'FootBall'),
        (Player_HOCKEY, 'Hockey'),
    ]

    auction_logo = models.ImageField(upload_to='auction/images/', null=True, blank=True)
    auction_name = models.CharField(unique=True, max_length=100)
    auction_date = models.DateTimeField()
    auction_type = models.CharField(
        max_length=20,
        choices=Player_CHOICES,
        default=Player_CRICKET,
    )
    auction_purse = models.IntegerField()
    min_bid = models.IntegerField()
    bid_increase = models.IntegerField()
    players_per_team = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.auction_name}"

class AddPlayer(models.Model):
    auction = models.ForeignKey(AddAuction, on_delete=models.CASCADE)
    Player_ALLROUNDER = 'All Rounder'
    Player_BATSMAN = 'Batsman'
    Player_BOWLER = 'Bowler'

    Player_CHOICES = [
        (Player_ALLROUNDER, 'All Rounder'),
        (Player_BATSMAN, 'Batsman'),
        (Player_BOWLER, 'Bowler'),
    ]

    Indian_Player = 'Indian'
    Overseas_Player = 'Overseas'

    Origin_Choices = [
        (Indian_Player, 'Indian'),
        (Overseas_Player, 'Overseas'),
    ]

    player_image = models.ImageField(upload_to='player/images/', null=True, blank=True)
    player_name = models.CharField(unique=True, max_length=100)
    player_type = models.CharField(
        max_length=20,
        choices=Player_CHOICES,
        default=Player_BATSMAN,
    )
    origin = models.CharField(
        max_length=20,
        choices=Origin_Choices,
        default=Indian_Player,
    )
    base_price = models.IntegerField()
    player_points = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.player_name}"

class AddTeam(models.Model):
    auction = models.ForeignKey(AddAuction, on_delete=models.CASCADE)
    team_username = models.CharField(max_length=100)
    team_logo = models.ImageField(upload_to='teams/images/', null=True, blank=True)
    team_name = models.CharField(max_length=30)
    purse_amt = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.team_name}"

class AddSponsers(models.Model):
    auction = models.ForeignKey(AddAuction, on_delete=models.CASCADE)
    sponser_name = models.CharField(max_length=30, blank=True, null=True)
    sponser_logo = models.ImageField(upload_to="sponsers/images/", null=True, blank=True)

    def __str__(self):
        return f"{self.sponser_name}"
    
class AuctionResult(models.Model):
    auction = models.ForeignKey(AddAuction, on_delete=models.CASCADE)
    player = models.ForeignKey(AddPlayer, on_delete=models.CASCADE)
    team = models.ForeignKey(AddTeam, on_delete=models.CASCADE, null=True, blank=True)
    sold_price = models.IntegerField(null=True, blank=True)
    status = models.CharField(max_length=10, choices=[('sold', 'Sold'), ('unsold', 'Unsold')], default='unsold')

    def __str__(self):
        return f"{self.player} - {self.status} - {self.team} - {self.sold_price} - {self.auction}"

# class Dashboard(models.Model):
#     auctions = models.ManyToManyField(AddAuction)
#     players = models.ManyToManyField(AddPlayer)
#     teams = models.ManyToManyField(AddTeam)
#     sponsers = models.ManyToManyField(AddSponsers)

#     def __str__(self):
#         return f"Dashboard {self.id}"

class Dashboard(models.Model):
    auctions = models.ForeignKey(AddAuction, on_delete=models.CASCADE)
    players = models.ForeignKey(AddPlayer, on_delete=models.CASCADE)
    teams = models.ForeignKey(AddTeam, on_delete=models.CASCADE)
    sponsers = models.ForeignKey(AddSponsers, on_delete=models.CASCADE)

    def __str__(self):
        return f"Dashboard {self.id}"


