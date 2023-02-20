from django.urls import path
from . import views


urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path("foods/", views.getFoods, name="foods"),
    path("meal/", views.getMeal, name="meal"),
    path('foods/create', views.create_food, name='create'),
    path("foods/<str:pk>", views.getFood, name="food"),
    path("foods/<str:pk>/delete/", views.delete_food, name="delete")
    


]
