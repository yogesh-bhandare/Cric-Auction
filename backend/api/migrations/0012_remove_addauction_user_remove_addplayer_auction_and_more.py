# Generated by Django 5.0.6 on 2024-07-14 09:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_addauction_user_alter_addplayer_auction_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addauction',
            name='user',
        ),
        migrations.RemoveField(
            model_name='addplayer',
            name='auction',
        ),
        migrations.RemoveField(
            model_name='addsponsor',
            name='auction',
        ),
        migrations.RemoveField(
            model_name='addteam',
            name='auction',
        ),
        migrations.RemoveField(
            model_name='auctionresult',
            name='auction',
        ),
    ]
