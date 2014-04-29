BurningAirline.Views.FlightListView = Backbone.View.extend({
  tagName: 'li',
  events: {
    'click': 'viewFlight'
  },
  initialize: function () {
    this.template = _.template($('#flightListView').html());
  },
  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  },
  viewFlight: function (event) {
    event.preventDefault();
    BurningAirline.router.navigate('flights/' + this.model.get('id'), true);
  }
});