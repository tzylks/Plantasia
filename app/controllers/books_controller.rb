class BooksController < ApplicationController
    skip_before_action :authorize, only: :index
    def index
        render json: Book.all
    end
end
