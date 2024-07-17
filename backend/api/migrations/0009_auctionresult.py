# Generated by Django 5.0.6 on 2024-07-01 07:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_delete_summary_dashboard_auctions_dashboard_players_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='AuctionResult',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sold_price', models.IntegerField(blank=True, null=True)),
                ('status', models.CharField(choices=[('sold', 'Sold'), ('unsold', 'Unsold')], default='unsold', max_length=10)),
                ('auction', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.addauction')),
                ('player', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.addplayer')),
                ('team', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='api.addteam')),
            ],
        ),
    ]