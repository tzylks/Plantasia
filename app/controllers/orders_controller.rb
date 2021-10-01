require 'pry'

class OrdersController < ApplicationController

    def payment

       items = @user.poly_carts.map(&:cartable)
       
       thing = items.inject(0){|sum,e| sum + e.price }

       
         
        payment_intent = Stripe::PaymentIntent.create({
            amount: thing * 100,
            currency: 'usd',
            payment_method_types: ['card'],
          })
          
          render json: {
            client_secret: payment_intent.client_secret
          }
      

        
        # Create a PaymentIntent with amount and currency
        # payment_intent = Stripe::PaymentIntent.create(
        #   amount: 0010,
        #   currency: 'usd'
        # )
        # {
        #   clientSecret: payment_intent['client_secret'],
        # }.to_json
    
    end

end
