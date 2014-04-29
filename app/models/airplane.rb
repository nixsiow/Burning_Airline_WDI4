# == Schema Information
#
# Table name: airplanes
#
#  id         :integer          not null, primary key
#  name       :string(255)
#  row        :string(255)
#  column     :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Airplane < ActiveRecord::Base

  attr_accessible :name, :row, :column
  
  has_many :flights
end
