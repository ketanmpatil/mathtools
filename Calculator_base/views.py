from django.shortcuts import render
from .models import Report


# Create your views here.

def report(request):
    if request.method == 'POST':
        first_name = request.POST.get('first_name')
        last_name = request.POST.get('last_name')
        email = request.POST.get('email')
        subject = request.POST.get('subject')
        desc = request.POST.get('desc')

        report = Report(first_name=first_name, last_name=last_name, email=email, subject=subject, desc=desc)
        report.save()

    return render(request, 'Calculator_base/report.html')
    
