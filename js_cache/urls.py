from django.conf.urls import patterns, include, url

from django.contrib import admin


urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'js_cache.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^$','js_cache.views.index',name='index'),
    url(r'^get_msg$','js_cache.views.get_msg',name='get_msg'),
    url(r'^cache_html$','js_cache.views.cache_html',name='cache_html'),
)
