BurningAirline.Models.Airplane = Backbone.Model.extend({
  urlRoot: '/airplanes',
  seatCount: function () {
    return this.get('row') //+ this.get('column');
  }
});