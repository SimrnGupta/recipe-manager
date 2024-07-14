from rest_framework import generics
from .models import Recipe
from .serializers import RecipeSerializer

# List all recipes or create new one
class RecipeListView(generics.ListCreateAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer

# Retrieve, update or delete recipe
class RecipeDetailView(generics.RetrieveDestroyAPIView):
    queryset = Recipe.objects.all()
    serializer_class = RecipeSerializer
