from django.urls import path
from . import views

urlpatterns = [
    path('recipes/', views.RecipeListView.as_view()),  # GET and POST
    path('recipes/<int:pk>/', views.RecipeDetailView.as_view()),  # GET and DELETE
]
