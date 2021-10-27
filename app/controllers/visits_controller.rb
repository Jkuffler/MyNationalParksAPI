class VisitsController < ApplicationController
    def index
        if current_user
            render json: current_user.visits
        else
            render json: { error: "Must be logged in for this action" }, status: :unauthorized
        end
    end

    def show
        if current_user
            visit = Visit.find_by(id: params[:id])
            render json: visit
        else
            render json: { error: "Visit does not exist"}, status: :not_found
        end
    end

    def create # jk: before_action helps abstract out the smelly code during refactor. meaning we can handle the current_user conditional logic with rails' before_action config
        if current_user
            new_visit = Visit.new(new_visit_params)
            if new_visit.save
                render json: new_visit
            else
                render json: { error: "Invalid entry"}, status: :unprocessable_not_found
            end
        else
            render json: { error: "Must log in to edit visits"}, status: :unauthorized
        end
    end

    def update
        if current_user
            visit = Visit.find_by(id: params[:id])
            if visit.update
                render json: visit
            else
                render json: { error: "Invalid entry"}, status: :unprocessable_not_found
            end
        else
            render json: { error: "Must log in to edit visits"}, status: :unauthorized
        end
    end

    def destroy
        if current_user
            visit = Visit.find(params[:id])
            if visit
                visit.destroy
                head :no_content
            else
                render json: { error: "Visit not found" }, status: :not_found
            end
        else
            render json: { error: "Must log in to edit visits"}, status: :unauthorized
        end
    end

    private
    def new_visit_params
        params.permit(:description, :date)
    end
end
