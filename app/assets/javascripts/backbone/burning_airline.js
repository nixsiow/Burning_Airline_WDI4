//= require_self
//= require_tree ./templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./views
//= require_tree ./routers

// Use Handlebars/Moustache style templates to prevent conflict with ERB.
_.templateSettings = {
  interpolate: /\{\{(.+?)\}\}/g
};

window.BurningAirline = {
  Models: {},
  Collections: {},
  Routers: {},
  Views: {}
}

// Instantiate router once flights have been fetched, then listen for URL changes
$(document).ready(function () {
    BurningAirline.burningFlights = new BurningAirline.Collections.Flights();
    BurningAirline.burningFlights.fetch().done(function () {
        BurningAirline.router = new BurningAirline.Routers.appRouter();
        Backbone.history.start({pushState: false});
    });
});
