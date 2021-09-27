class ToolsController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Tool.all
    end
end
