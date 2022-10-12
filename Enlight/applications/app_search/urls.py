from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'inner_doc'

urlpatterns = [
    path('', views.get_search_data, name='search'),
]
