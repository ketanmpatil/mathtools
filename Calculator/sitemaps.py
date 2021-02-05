from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class Static_Sitemap(Sitemap):

    protocol = 'https'
    priority = 1.0
    changefreq = 'always'
    


    def items(self):
        return ['home', 'reg', 'quad', 'bmi', 'dsk']

    def location(self, item):
        return reverse(item)
