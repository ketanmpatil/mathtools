from django.db import models

# Create your models here.
class Report(models.Model):
    msg_id = models.AutoField(primary_key=True)
    first_name = models.CharField(max_length=70, default='')
    last_name = models.CharField(max_length=70, default='')
    email = models.EmailField(max_length=70, default='')
    subject = models.CharField(max_length=70, default='')
    desc = models.CharField(max_length=500, default='')

    def __str__(self):
        return self.first_name