from decouple import config
import requests


def send_verification_sms(phone_number, verification_code):
        """
        Send verification code to user's phone number
        Args:
            phone_number (string): The phone number to send the verification code to
            verification_code (string): The verification code to be sent
        Returns:
            bool: True if the SMS was sent successfully, False otherwise
        """

        url = "https://smsvas.com/bulk/public/index.php/api/v1/sendsms"
        
        payload = {
            "user": "contact@adsyst-solutions.com",
            "password": config('SMS_API_PASSWORD'),
            "senderid": config('SMS_SENDER_ID'),
            "sms": f"Your verification code is: {verification_code}",
            "mobiles": phone_number
        }
 
        
        try:
            response = requests.post(url, json=payload)
            response.raise_for_status()
            return True
        except requests.RequestException as e:
            print(f"Error sending SMS: {e}")
            return False