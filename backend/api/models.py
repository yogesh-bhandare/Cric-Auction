from django.db import models

class AddAuction(models.Model):
    GAME_CRICKET = 'Cricket'
    GAME_VOLLEYBALL = 'VolleyBall'
    GAME_FOOTBALL = 'FootBall'
    GAME_HOCKEY = 'Hockey'

    GAME_CHOICES = [
        (GAME_CRICKET, 'Cricket'),
        (GAME_VOLLEYBALL, 'VolleyBall'),
        (GAME_FOOTBALL, 'FootBall'),
        (GAME_HOCKEY, 'Hockey'),
    ]

    auction_logo = models.ImageField(upload_to='images/')
    auction_name = models.CharField(unique=True, max_length=100)
    auction_date = models.DateTimeField()
    auction_type = models.CharField(
        max_length=20,
        choices=GAME_CHOICES,
        default=GAME_CRICKET,
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
    GAME_CRICKET = 'Cricket'
    GAME_VOLLEYBALL = 'VolleyBall'
    GAME_FOOTBALL = 'FootBall'
    GAME_HOCKEY = 'Hockey'

    GAME_CHOICES = [
        (GAME_CRICKET, 'Cricket'),
        (GAME_VOLLEYBALL, 'VolleyBall'),
        (GAME_FOOTBALL, 'FootBall'),
        (GAME_HOCKEY, 'Hockey'),
    ]

    Indian_Player = 'Indian'
    Overseas_Player = 'Overseas'

    Origin_Choices = [
        (Indian_Player, 'Indian'),
        (Overseas_Player, 'Overseas'),
    ]

    player_image = models.ImageField(upload_to='images/')
    player_name = models.CharField(unique=True, max_length=100)
    auction_type = models.CharField(
        max_length=20,
        choices=GAME_CHOICES,
        default=GAME_CRICKET,
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
    team_logo = models.ImageField(upload_to='images/')
    team_name = models.CharField(max_length=30)
    team_username = models.CharField(max_length=30)
    purse_amt = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    modified = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.team_name}"

class Dashboard(models.Model):
    pass

class Summary(models.Model):
    pass

class Sponsers(models.Model):
    sponser_name = models.CharField(max_length=30, blank=True, null=True)
    sponser_logo = models.ImageField(upload_to="images/")

    def __str__(self):
        return self.sponser_name
    