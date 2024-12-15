from rest_framework import serializers

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.exceptions import AuthenticationFailed    

from .models import User
from django.contrib.auth.models import Group,  Permission
from django.utils.translation import gettext_lazy as _


from django.contrib.auth.forms import UserCreationForm
from django import forms
import re



class CreateUserManager(UserCreationForm):
    phone_one = forms.CharField(required=False) 
    address_one = forms.CharField(required=False) 
    dob = forms.CharField(required=False) 
    bio = forms.CharField(required=False) 
    
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'email', 'phone', 'password1', 'password2']


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=256, min_length=6, write_only=True)
    phone = serializers.CharField(max_length=20)

    class Meta:
        model = User
        fields = '__all__'
    
    def validate_phone(self, value):
        phone_regex = re.compile(r'^\+\d{1,3}\d{6,12}$')
        
        if not phone_regex.match(value):
            raise serializers.ValidationError(
                _("Invalid phone number format. Please use the format +[country code][number], e.g., +237XXXXXXXXX")
            )
        
        valid_country_codes = ['+237',]
        if not any(value.startswith(code) for code in valid_country_codes):
            raise serializers.ValidationError(
                _("Invalid country code. Supported country codes are: {}").format(", ".join(valid_country_codes))
            )
        
        return value
    
    # def create(self, validated_data):
    #     user = User.objects.create_user(**validated_data)
    #     return user
    


class UserUpdateSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'phone', 'address', 'bio']  
        read_only_fields = ['email', 'username']    


class LoginSerializer(serializers.ModelSerializer):
    password = serializers.CharField(max_length=256, min_length=6, write_only=True)
    class Meta:
        ref_name = "CustomLoginSerializer"
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}


class ResetPasswordSerializer(serializers.Serializer):
    email = serializers.EmailField(max_length=255, min_length=5)
    class Meta:
        fields = ['email']
    
    def validate(self, attrs):

        return super().validate(attrs)


# class ChangePasswordSerializer(serializers.Serializer):
#     old_password = serializers.CharField(max_length=256, min_length=6, write_only=True)
#     new_password = serializers.CharField(max_length=256, min_length=6, write_only=True)
#     confirm_password = serializers.CharField(max_length=256, min_length=6, write_only=True)
    
#     class Meta:
#         fields = ['old_password', 'new_password', 'confirm_password']
    
#     def validate(self, attrs):
#         old_password = attrs.get('old_password')
#         new_password = attrs.get('new_password')
#         confirm_password = attrs.get('confirm_password')
        
#         if new_password != confirm_password:
#             raise serializers.ValidationError(
#                 _("Les mots de passe ne correspondent pas.")
#             )
        
#         return super().validate(attrs)