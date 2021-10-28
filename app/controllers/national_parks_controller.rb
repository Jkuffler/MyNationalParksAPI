class NationalParksController < ApplicationController
    def index
        national_parks = NationalPark.all
        render json: national_parks
    end

    def show
        np = NationalPark.find_by(id: params[:id])
        if np
            render json: np
        else
            render json: {error: "Park not found"}, status: :not_found
        end
    end

    def random
        render json: NationalPark.all.sample
    end

end
