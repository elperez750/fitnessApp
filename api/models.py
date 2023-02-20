from django.db import models

# Create your models here.
class Food(models.Model):
    name = models.CharField(max_length=100)
    calories = models.IntegerField()
    meal = models.CharField(max_length=100, choices=[('breakfast', 'Breakfast'), ('lunch', 'Lunch'), ('dinner', 'Dinner')],  default='breakfast')
    
    def __str__(self):
        return self.name


class Activities(models.Model):
    activity = models.CharField(max_length=100)
    calories_burned = models.IntegerField()
    time = models.DateTimeField(auto_now_add=True)
   

    def __str__(self):
        return self.name


