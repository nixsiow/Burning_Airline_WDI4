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
    console.log(flight);
    flight.seats

    // for (var i=0;i<flight.seatCount;i++)
    //   { 
        
    //       this.$el.append('<div id="' + id + '">seats and stuff</div>');
    //   } 
  }
});
