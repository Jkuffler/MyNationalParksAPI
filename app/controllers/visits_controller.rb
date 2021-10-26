class VisitsController < ApplicationController
    def index
        if current_user
            render json: current_user.visits
        else
            render json: { error: "Must be logged in for this action" }, status: :unauthorized
        end
    end

    def show

    end
end
