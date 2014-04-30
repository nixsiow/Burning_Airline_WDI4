BurningAirline.Views.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    
  },

  initialize: function () {
    this.template = _.template($('#flightView').html());
    this.render();
  },

  render: function () {
    var flight = this.model.toJSON();
    this.$el.html(this.template(flight));
    
    
    var seat_id = ''
    
    for (var i=0;i<flight.seatCount;i++)
       { 
        seat_id = flight.seats[i].column_row
           this.$el.append('<div id="' + seat_id + '">seats and stuff</div>');
      } 
  }
});
