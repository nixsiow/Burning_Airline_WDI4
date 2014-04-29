# == Schema Information
#
# Table name: seats
#
#  id         :integer          not null, primary key
#  column_row :string(255)
#  flight_id  :integer
#  available  :boolean
#  created_at :datetime
#  updated_at :datetime
#

class Seat < ActiveRecord::Base

  attr_accessible :column_row, :flight_id, :available

  has_one :reservation
  belongs_to :flight
end
