# Generated by Django 5.0.6 on 2024-06-28 19:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_addplayer_auction_type'),
    ]

    operations = [
        migrations.RenameField(
            model_name='addplayer',
            old_name='auction_type',
            new_name='player_type',
        ),
    ]
