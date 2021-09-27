class PlantsController < ApplicationController
   skip_before_action :authorize, only: :index
    def index
        render json: Plant.all
    end
end
