# Generated by Django 5.0.6 on 2024-06-30 07:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0006_rename_auction_type_addplayer_player_type'),
    ]

    operations = [
        migrations.CreateModel(
            name='AddSponsers',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sponser_name', models.CharField(blank=True, max_length=30, null=True)),
                ('sponser_logo', models.ImageField(blank=True, null=True, upload_to='sponsers/images/')),
            ],
        ),
        migrations.DeleteModel(
            name='Sponsers',
        ),
        migrations.AlterField(
            model_name='addauction',
            name='auction_logo',
            field=models.ImageField(blank=True, null=True, upload_to='auction/images/'),
        ),
        migrations.AlterField(
            model_name='addplayer',
            name='player_image',
            field=models.ImageField(blank=True, null=True, upload_to='player/images/'),
        ),
        migrations.AlterField(
            model_name='addteam',
            name='team_logo',
            field=models.ImageField(blank=True, null=True, upload_to='teams/images/'),
        ),
    ]