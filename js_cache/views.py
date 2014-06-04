from django import shortcuts
from django.conf import settings
from django.utils.translation import ugettext as _
import os
from datetime import datetime  # noqa
import pytz

def _one_year():
    now = datetime.utcnow()
    return datetime(now.year + 1, now.month, now.day, now.hour,
                    now.minute, now.second, now.microsecond, now.tzinfo)
    
def index(request):
    request.session['django_language'] = settings.LANGUAGE_CODE
    
    context = {"title":_("Welcome to my site.")}
    response = shortcuts.render(request, "index.html",context)
    #response.set_cookie('django_language', settings.LANGUAGE_CODE,expires=_one_year())
    return response

def get_msg(request):
    data = request.GET.get('data',None)
    return shortcuts.HttpResponse(data)

def cache_html(request):
    static_dir = settings.STATICFILES_DIRS[0]
    cache_file = os.path.join(static_dir, "demo.appcache")
    f1 = open(cache_file)
    cache = f1.read()
    f1.close()
    ret = shortcuts.HttpResponse(cache, content_type = "text/cache-manifest")
    return ret