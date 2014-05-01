BurningAirline.Views.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    'click .true': 'turnFalse',
    'click .false': 'turnTrue'
  },

  turnFalse: function() {
    
    alert("congratulations, you've booked a flight on Burning Airlines")
    var id = $(this).attr("id");
    // // console.log($(this));
    // $(".true").attr('class', 'false');
    // // $(".true").attr("class","false");
    // console.log($(this));
  },
  turnTrue: function() {

  },

  initialize: function () {
    this.template = _.template($('#flightView').html());
    this.render();
  },

  render: function () {

    var flight = this.model.toJSON();
    flight.seatCount = this.model.attributes.seats.length;
    this.$el.html(this.template(flight));
    
    
    console.log(this.model.attributes.seats);
    
    for (var i=0;i<flight.seatCount;i++) { 
        var seatView = new BurningAirline.Views.SeatView({model: this.model.attributes.seats[i]});
        this.$el.append(seatView.render().el);
        // seat_id = flight.seats[i].column_row
        // seat_class = flight.seats[i].available
        //    $('#seats').append('<div id="' + seat_id + '" class="' + seat_class + '"' + '>' + seat_id + '</div>');
      } 
  }
});
