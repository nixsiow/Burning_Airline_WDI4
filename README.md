#Burning Airlines Lab

##Summary: An Airlines Reservation System
- - -

#Requirements Checklists

- [x] An admin can create planes on the `/airplanes` page.

- [x] A plane has a name, rows, and columns.

- [ ] When a new plane is saved the page should show a seating diagram.

- [x] An admin can create flights on the `/flights` page.

- [x] A flight has a flight number, origin, destination, date, and plane.

- [ ] When a new flight is saved, the page should show a list with the newest date at the top of the list and the number of available seats on the plane.

- [ ] A user can search for flights on the `/search` page.

- [x] The search page should have an input form for the origin and destination.

- [ ] When a user creates a search, the page should show a list of flights with the newest date at the top, and include the number of available seats on the flight.

- [ ] When the user selects a flight, we should go to the show page ie, `/flights/3`.
- [ ] The plane show page should show a seating diagram with available seats and seats that have been selected, with their names.

- [ ] A user can select a seat.

- [ ] When a seat is saved, the available seats on the `/flights` page should update.

- - -

#Wireframe
![image](https://raw.githubusercontent.com/generalassembly-studio/WDI_Curriculum/master/Instructor_Tools/group_labs/VirginAirlines/virgin_airlines.png?token=570123__eyJzY29wZSI6IlJhd0Jsb2I6Z2VuZXJhbGFzc2VtYmx5LXN0dWRpby9XRElfQ3VycmljdWx1bS9tYXN0ZXIvSW5zdHJ1Y3Rvcl9Ub29scy9ncm91cF9sYWJzL1ZpcmdpbkFpcmxpbmVzL3Zpcmdpbl9haXJsaW5lcy5wbmciLCJleHBpcmVzIjoxMzk5MzMwOTAwfQ%3D%3D--0e0f1abe276dbb9f0d3715f02daab35268c6ec07)

- - -

#Models
There are models for Airplane, Flight, User, and Reservation.

An Airplane has many Flights and a Flight belongs to an Airplane.

A User has many Reservations and a Reservation belongs to a User.

A Flight has many Reservations and a Reservation belongs to a Flight.

The Reservation table is a join table between Users and Flights, which have a many-to-many relationship through Reservations.

The Airplane model has rows and columns to determine the configuration of the plane; the Airplane model has a row and a column for a particular seat.

- - -

#Gems
Gems for debugging

* gem 'pry-rails'
* gem 'pry-debugger'
* gem 'pry-stack_explorer'
* gem 'better_errors'
* gem 'binding_of_caller'
* gem 'annotate'
* gem 'sextant'

To allow user sign up / logins

* gem 'devise'

To prevent mass assignment to attributes not explicitly allowed

* gem 'protected_attributes'

underscore javascript library

* gem 'underscore-rails'

To annotate our models

* gem 'annotate'

Bootstrap ! For styling.

* gem 'bootstrap-sass'

Modernizr gem

* gem 'modernizr-rails'

Backbone gem

* gem 'rails-backbone'