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
a1 = Airplane.new(:name => '707', :row => 'A', :column => '2')
a1.save

# Flight' Seed
f1 = Flight.new(:flight_no => 'BX788', :origin => 'syd', :destination => 'ldn', :data => 'friday', :airplane_id => 1)
f1.save

# Seat' Seed
s1 = Seat.new(:column_row => 'A8', :flight_id => 1, :available => true)
s1.save

# Reservation' Seed
r1 = Reservation.new(:user_id => 1, :flight_id => 1, :seat_id => 1)
r1.save



