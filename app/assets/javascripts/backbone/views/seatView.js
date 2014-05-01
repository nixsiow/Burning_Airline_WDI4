BurningAirline.Views.SeatView = Backbone.View.extend({
  el: '<div/>',
  events: {
    'click': 'toggleReservation'
  },
  initialize: function () {
    this.template = _.template($('#seatsView').html());
    
  },

  render: function () {
    this.$el.html(this.template(this.model));
    return this;
  },

  toggleReservation: function () {
    console.log('thank you for reserving seat', this.model.column_row);
  }

  
});