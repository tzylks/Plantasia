Rails.application.routes.draw do
  
  resources :poly_carts
  resources :tools
  resources :books
  resources :user_carts
  resources :user_plants
  resources :plants
  resources :users

  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  get '/sendit', to: 'outbound_sms#sendit'
  get '/nexmo', to: 'outbound_sms#nexmo'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
