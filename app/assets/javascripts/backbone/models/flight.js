BurningAirline.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  initialize: function () {
    this.airplane = new BurningAirline.Models.Airplane(this.airplane);
    this.set('seatCount', this.airplane.seatCount());
  }
  // defaults: {
  //   slug: 'new-tweet',
  // }
});