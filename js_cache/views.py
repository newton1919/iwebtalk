from django import shortcuts
from django.conf import settings
import os

def index(request):
    return shortcuts.render(request, "index.html")

def cache_html(request):
    static_dir = settings.STATICFILES_DIRS[0]
    cache_file = os.path.join(static_dir, "demo.appcache")
    f1 = open(cache_file)
    cache = f1.read()
    f1.close()
    ret = shortcuts.HttpResponse(cache, content_type = "text/cache-manifest")
    return ret