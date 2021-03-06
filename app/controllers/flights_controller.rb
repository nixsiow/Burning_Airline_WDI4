class FlightsController < ApplicationController
  before_action :set_flight, only: [:show, :edit, :update, :destroy]

  before_filter :check_if_logged_in, :except => [:landing]


  def landing
  end

  # GET /flights
  # GET /flights.json
  def index
    @flights = Flight.all

    respond_to do |format|
      format.html 
      format.json { render json: @flights, :include => [:airplane, :reservations, :users, :seats] }
    end
  end

  # GET /flights/1
  # GET /flights/1.json
  def show
    @flights = Flight.find(params[:id])
    
    respond_to do |format|
      format.html 
      format.json { render json: @flights, :include => :airplane} 
    end
  end

  # GET /flights/new
  def new
    @flight = Flight.new
  end

  # GET /flights/1/edit
  def edit
  end

  # POST /flights
  # POST /flights.json
  def create
    @flight = Flight.new(flight_params)

    respond_to do |format|
      if @flight.save
        format.html { redirect_to @flight, notice: 'Flight was successfully created.' }
        format.json { render action: 'show', status: :created, location: @flight }
      else
        format.html { render action: 'new' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end

    airplane = Airplane.find(@flight.airplane_id)

    rows_array = (1..airplane.row.to_i).to_a
    column_array = (1..airplane.column.to_i).to_a
    

    rows_array.each do |row_name|
      column_array.each do |column_name|
        seat_name = row_name.to_s + "-" + column_name.to_s 
        seat = Seat.create(:column_row => seat_name, :flight_id => @flight.id, :available => true)
      end
    end

  end

  # PATCH/PUT /flights/1
  # PATCH/PUT /flights/1.json
  def update
    respond_to do |format|
      if @flight.update(flight_params)
        format.html { redirect_to @flight, notice: 'Flight was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit' }
        format.json { render json: @flight.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /flights/1
  # DELETE /flights/1.json
  def destroy
    @flight.destroy
    respond_to do |format|
      format.html { redirect_to flights_url }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_flight
      @flight = Flight.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def flight_params
      params.require(:flight).permit(:flight_no, :origin, :destination, :date, :airplane_id)
    end

    def check_if_logged_in
      redirect_to(root_path) if current_user.nil?
    end
end
