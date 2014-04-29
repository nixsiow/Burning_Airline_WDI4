BurningAirline.Views.AppView = Backbone.View.extend({
  el: '#main',
  initialize: function () {
    this.template = _.template($('#appView').html());
  },
  render: function () {
    this.$el.html(this.template());

    this.collection.each(function (flight) {
      var view = new BurningAirline.Views.FlightListView({model:flight});
      $('#flights').append(view.render().el);
    });
  }
});