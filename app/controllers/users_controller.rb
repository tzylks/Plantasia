
class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    include ActionController::MimeResponds

    def index
        users = User.all
        render json: users
    end
    
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end
    
    def show
        render json: @user
    end 
    
    def update
        @user.update!(user_params)
        render json: @user, status: :accepted
    end
    
    def destroy
        @user.destroy
        head :no_content
    end

    def email
        user = @user
    
        respond_to do |format|
          if user
            # Tell the UserMailer to send a welcome email after save
            UserMailer.with(user: user).welcome_email.deliver_later
    
            format.html { redirect_to(user, notice: 'User was successfully created.') }
            format.json { render json: user, status: :created, location: user }
          else
            format.html { render action: 'new' }
            format.json { render json: user.errors, status: :unprocessable_entity }
          end
        end
      end
    
    private  
    
    def user_params
        params.permit(:username, :password, :password_confirmation, :name,  :age, :user_cart)
    end
    
    
    
end
