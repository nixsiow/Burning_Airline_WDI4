BurningAirline.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'flights/:id': 'showFlight',
    '*anything': 'goHome'
  },

  index: function () {
    console.log('I am in router.js')
    var view = new BurningAirline.Views.AppView({collection: BurningAirline.burningFlights});
    view.render();
  },

  showFlight: function (id) {
    var flight = BurningAirline.burningFlights.get(id);
    new BurningAirline.Views.FlightView({model:flight});
    debugger;
  },

  goHome: function () {
    document.location.hash = '';
  }
});
