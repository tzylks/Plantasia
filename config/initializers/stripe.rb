
Stripe.api_key = Rails.application.credentials.stripe[:public_key]
require 'stripe'
# This is your real test secret API key.
Stripe.api_key = Rails.application.credentials.stripe[:secret_key]

