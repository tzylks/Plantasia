class UserCartsController < ApplicationController
    skip_before_action :authorize, only: :create
    
    def index
        render json: UserCart.all
    end

    def create
        user = UserCart.create!(obj_params)
        render json: user, status: :created
    end

    private

    def obj_params
        params.permit(:plant_id, :user_id, :tool_id, :book_id)
    end
end
