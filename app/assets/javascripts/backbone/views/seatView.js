BurningAirline.Views.SeatView = Backbone.View.extend({
  el: '<div class="seats"/>',
  events: {
    'click': 'toggleReservation'
  },
  initialize: function () {
    this.template = _.template($('#seatsView').html());
    
  },

  render: function () {
    // this.$el.html(this.template(this.model));
    this.$el.html(this.template(this.model));
    return this;
  },

  toggleReservation: function () {
    console.log('thank you for reserving seat', this.model.column_row);

    this.model.available = false;
    console.log("This seat is no longer available because we changed it's availabilty to ", this.model.available);

  }

  
});