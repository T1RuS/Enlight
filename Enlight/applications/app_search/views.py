from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response


@api_view(['POST'])
def get_search_data(request):
    # функция для приема поисковых данных
    print(request.data)
    return Response(request.data, status=200)
