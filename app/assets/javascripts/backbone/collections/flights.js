BurningAirline.Collections.Flights = Backbone.Collection.extend({
  url: '/flights',
  model: BurningAirline.Models.Flight
});