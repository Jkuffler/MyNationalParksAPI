class UsersController < ApplicationController

    def show
        if current_user
            render json: current_user
        else
            render json: { error: "No active session" }, status: :unauthorized
        end
    end

    def create
        user = User.new(user_params)
        if user.save
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { error: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    # def user_visits
    #     if current_user
    #         render json: current_user.visits
    #     else
    #         render json: { error: "Must be logged in for this action" }, status: :unauthorized
    #     end
    # end

    private
    def user_params
        params.permit(:user_name, :password, :password_confirmation, :bio)
    end
end
