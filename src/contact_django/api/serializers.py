from rest_framework import serializers
from contact_django.contact.models import Contact


class ContactSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Contact
        fields = ('name', 'email', 'mobile')
