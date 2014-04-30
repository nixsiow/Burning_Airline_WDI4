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
  }
});
