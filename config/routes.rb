Rails.application.routes.draw do
  resources :tools
  resources :orders 
  resources :poly_carts
  resources :books
  resources :user_carts
  resources :user_plants
  resources :plants
  resources :users do 
    resources :poly_carts, only: [:show, :index, :destroy]
  end

  get '/me', to: 'users#show'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/sendit', to: 'outbound_sms#sendit'
  get '/nexmo', to: 'outbound_sms#nexmo'
  get '/payment', to: 'orders#payment'
  get '/email', to: 'users#email'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
