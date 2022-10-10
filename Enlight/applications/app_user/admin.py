from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from Enlight.applications.app_user.models import SysUser


UserAdmin.list_display += ('comment',)
UserAdmin.fieldsets += (('Добавлено', {'fields': ('comment', )}),)


@admin.register(SysUser)
class SysUserAdmin(UserAdmin):
    search_fields = ('username',)
