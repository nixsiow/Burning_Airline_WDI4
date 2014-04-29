BurningAirline.Views.FlightView = Backbone.View.extend({
  el: '#main',
  events: {
    
  },

  initialize: function () {
    this.template = _.template($('#flightView').html());
    this.render();
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  }
});
