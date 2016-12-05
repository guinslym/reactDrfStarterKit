from django.conf.urls import url, include
from users import views as user_views
from django.views.decorators.cache import cache_page
from django.conf import settings

urlpatterns = [
        url(r'^api/users/', include('users.urls', namespace = 'users')),
        # catch all others because of how history is handled by react router - cache this page because it will never change
        url(r'', cache_page(settings.PAGE_CACHE_SECONDS)(user_views.index), name='index'),
]

