

require 'nexmo'

NEXMO_API_KEY = ENV['NEXMO_API_KEY']
NEXMO_API_SECRET = ENV['NEXMO_API_SECRET']
TO_NUMBER = ENV['TO_NUMBER']

client = Nexmo::Client.new(
  api_key: "352d7852",
  api_secret: "3Hn1TzKvlKtBd0Ee"
)

client.sms.send(
  from: "18555014671",
  to: "15205857432",
  text: 'Hi Handsome'
)
