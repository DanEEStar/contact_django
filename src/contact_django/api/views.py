from rest_framework import viewsets, permissions
from contact_django.contact.models import Contact
from serializers import ContactSerializer


class ContactViewSet(viewsets.ModelViewSet):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


