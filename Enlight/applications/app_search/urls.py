from django.urls import path
from django.views.generic import TemplateView

from . import views


app_name = 'inner_doc'

urlpatterns = [
    path('search', TemplateView.as_view(template_name='index.html'), name='search'),
]