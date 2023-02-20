from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from .models import *
from .serializers import *
from django.db import IntegrityError
from django.views.decorators.csrf import csrf_exempt






@api_view(['GET'])
def getRoutes(request):
    return Response("hey")


@api_view(['GET'])
def getFoods(request):
    food = Food.objects.all()
    serializer = FoodSerializer(food, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMeal(request):
    meal = Meal.objects.all()
    serializer = MealSerializer(meal, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getFood(request, pk):
    food = Food.objects.get(id=pk)
    serializer = FoodSerializer(food, many=False)
    return Response(serializer.data)
    
@csrf_exempt
@api_view(["DELETE"])
def delete_food(request, pk):
    food = Food.objects.get(id=pk)
    print(pk)
    print(food.name, food.calories)
    food.delete()
    serializer = FoodSerializer(food, many=False)
    return Response(serializer.data)




@api_view(['POST'])
def create_food(request):
    if request.method == 'POST':
        try:
            # Get the data from the request
            data = request.data
            
            name = data.get("name")
            calories = data.get("calories")
            meal = data.get("meal")

            print(name, calories, meal)

            # Create a new food item
            food = Food.objects.create(name=name, calories=calories, meal=meal)
            # Return a success response
            serializer = FoodSerializer(food, many=False)
            return Response(serializer.data)
        except IntegrityError:
            return JsonResponse({'error': 'The name field is required.'}, status=400)