from django.contrib.auth.models import UserManager, AbstractUser
from django.db import models


class SysUser(AbstractUser):
    """ Модель основного пользователя. """

    comment = models.CharField(max_length=100, null=True, blank=True,
                               verbose_name='Комментарий')
    objects = UserManager()

    def __str__(self):
        return self.username

    class Meta:
        db_table = 'AU_USR_SYS_USER'
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'
