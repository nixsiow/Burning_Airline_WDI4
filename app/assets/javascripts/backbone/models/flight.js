BurningAirline.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  initialize: function () {
    this.airplane = new BurningAirline.Models.Airplane(this.get('airplane'));
    this.on('change', function () {
      this.set('seatCount', this.airplane.seatCount());
    });
  }
});