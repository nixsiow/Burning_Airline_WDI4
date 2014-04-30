# Reset the database
User.destroy_all
Airplane.destroy_all
Flight.destroy_all
Seat.destroy_all
Reservation.destroy_all


# Users' Seed
u1 = User.new(:username => 'user1', :email => 'user1@user.com', :password => 'abcd1234', :password_confirmation => 'abcd1234')
u1.save

# Airplace' Seed
a1 = Airplane.new(:name => '707', :row => '24', :column => '4')
a2 = Airplane.new(:name => '737', :row => '20', :column => '6')
a3 = Airplane.new(:name => '747', :row => '36', :column => '8')
a1.save
a2.save
a3.save



# Flight' Seed
f1 = Flight.new(:flight_no => 'BX788', :origin => 'Sydney', :destination => 'London', :date => 'Friday', :airplane_id => a1.id)
f2 = Flight.new(:flight_no => 'BX555', :origin => 'New York', :destination => 'Chicago', :date => 'Monday', :airplane_id => a1.id)
f3 = Flight.new(:flight_no => 'BX111', :origin => 'Paris', :destination => 'Sydney', :date => 'Saturday', :airplane_id => a2.id)
f4 = Flight.new(:flight_no => 'BX222', :origin => 'Berlin', :destination => 'Tokyo', :date => 'Sunday', :airplane_id => a3.id)
f1.save
f2.save
f3.save
f4.save

# Seat' Seed
s1 = Seat.new(:column_row => 'A8', :flight_id => 1, :available => false)
s1.save

s2 = Seat.new(:column_row => 'B12', :flight_id => 1, :available => false)
s2.save

# Reservation' Seed
r1 = Reservation.new(:user_id => 1, :flight_id => 1, :seat_id => 1)
r1.save

r2 = Reservation.new(:user_id => 1, :flight_id => 1, :seat_id => 2)
r2.save


