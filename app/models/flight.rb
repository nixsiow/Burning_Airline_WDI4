class Flight < ActiveRecord::Base
    attr_accessible :flight_no, :origin, :destination, :date, :airplane_id

    has_many :reservations
    belongs_to :airplane
    has_many :users, through: :reservations
    has_many :seats
end
