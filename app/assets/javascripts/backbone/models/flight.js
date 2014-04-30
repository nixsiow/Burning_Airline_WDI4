BurningAirline.Models.Flight = Backbone.Model.extend({
  urlRoot: '/flights',
  parse: function (response) {
    console.log(response.airplane);
    this.airplane = new BurningAirline.Models.Airplane(response.airplane);
    return response;
  } 
  // defaults: {
  //   slug: 'new-tweet',
  // }
});