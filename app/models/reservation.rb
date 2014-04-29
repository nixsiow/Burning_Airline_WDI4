# == Schema Information
#
# Table name: reservations
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  flight_id  :integer
#  seat_id    :integer
#  created_at :datetime
#  updated_at :datetime
#

class Reservation < ActiveRecord::Base
  attr_accessible :user_id, :flight_id, :seat_id

  belongs_to :flight
  belongs_to :user
  belongs_to :seat
end
