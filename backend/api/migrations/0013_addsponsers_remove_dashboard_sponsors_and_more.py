# Generated by Django 5.0.6 on 2024-07-14 09:13

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_remove_addauction_user_remove_addplayer_auction_and_more'),
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
        migrations.RemoveField(
            model_name='dashboard',
            name='sponsors',
        ),
        migrations.AddField(
            model_name='auctionresult',
            name='auction',
            field=models.ForeignKey(default=1, on_delete=django.db.models.deletion.CASCADE, to='api.addauction'),
        ),
        migrations.AlterField(
            model_name='addteam',
            name='team_name',
            field=models.CharField(max_length=30),
        ),
        migrations.AlterField(
            model_name='addteam',
            name='team_username',
            field=models.CharField(max_length=30),
        ),
        migrations.AddField(
            model_name='dashboard',
            name='sponsers',
            field=models.ManyToManyField(to='api.addsponsers'),
        ),
        migrations.DeleteModel(
            name='AddSponsor',
        ),
    ]