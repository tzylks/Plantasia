class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
wrap_parameters format:[]

before_action :authorize

private 

def render_unprocessable_entity(exception)
  render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
end

def authorize
  @user = User.find_by(id: session[:user_id])
  return render json: { error: ["Not Authorized"]}, status: :unauthorized unless @user 
end 



  
end