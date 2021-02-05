from django.urls import path
from django.views.generic import TemplateView
from . import views


urlpatterns = [
    path('',TemplateView.as_view(template_name="Calculator_base/index.html"), name='home'),
    path('regular-calculator', TemplateView.as_view(template_name="Calculator_base/regular_calculator.html"), name='reg'),
    path('quadratic-calculator', TemplateView.as_view(template_name="Calculator_base/quadratic_calculator.html"), name='quad'),
    path('bmi-index-calculator',  TemplateView.as_view(template_name="Calculator_base/bmi_index_calculator.html"), name='bmi'),
    path('django-secret-key', TemplateView.as_view(template_name="Calculator_base/dsk_generator.html") , name='dsk'),
    path('report', views.report , name='report'),
    path('robots.txt', TemplateView.as_view(template_name="Calculator_base/robots.txt", content_type='text/plain')),
]

