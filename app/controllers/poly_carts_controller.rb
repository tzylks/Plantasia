class PolyCartsController < ApplicationController
   skip_before_action :authorize, only: :index
    def index
        render json: PolyCart.all
    end

    def create
        user = PolyCart.create!(obj_params)
        render json: user, status: :created
    end

    def show 
        user = PolyCart.find(params[:id])
        render json: user
    end

    def destroy
        cart = PolyCart.find(params[:id])
        cart.destroy
        head :no_content
    end

    private

    def obj_params
        params.permit(:plant_id, :user_id, :tool_id, :book_id, :cartable_type, :cartable_id)
    end
end
