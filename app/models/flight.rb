# == Schema Information
#
# Table name: flights
#
#  id          :integer          not null, primary key
#  flight_no   :string(255)
#  origin      :string(255)
#  destination :string(255)
#  date        :string(255)
#  airplane_id :integer
#  created_at  :datetime
#  updated_at  :datetime
#

class Flight < ActiveRecord::Base

  attr_accessible :flight_no, :origin, :destination, :date, :airplane_id

  has_many :reservations
  belongs_to :airplane
  has_many :users, through: :reservations
  has_many :seats
end
