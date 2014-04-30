BurningAirline.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'showFlight',
    '*anything': 'goHome'
  },

  index: function () {
    console.log('here')
    var view = new BurningAirline.Views.AppView({collection: BurningAirline.burningFlights});
    view.render();
  },

  showFlight: function (id) {
    var flight = BurningAirline.burningFlights.get(id);
    new BurningAirline.Views.FlightView({model:flight});
  },

  goHome: function () {
    document.location.hash = '';
  }
});
