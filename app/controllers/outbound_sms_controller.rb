

class OutboundSmsController < ApplicationController
    
    skip_before_action :authorize, only: [:sendit, :nexmo]
    def sendit
        Vonage.sms.send(from: "18555014671", to: "15205857432", text: 'Thank you for Subscribing to Plantasia')
    end
    
end

