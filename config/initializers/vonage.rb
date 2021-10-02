Vonage.setup do |config|
  config.api_key = Rails.application.credentials.vonage[:VONAGE_API_KEY]
  config.api_secret = Rails.application.credentials.vonage[:VONAGE_API_SECRET]
end

# VONAGE_API_KEY = "352d7852"
# VONAGE_API_SECRET = "3Hn1TzKvlKtBd0Ee"