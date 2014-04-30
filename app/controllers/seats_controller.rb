class SeatsController < ApplicationController
  def index
    @seats = Seat.all
    respond_to do |format|
      format.html 
      format.json { render json: @seats }
    end

  end
end
