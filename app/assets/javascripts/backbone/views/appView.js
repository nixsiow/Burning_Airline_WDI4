BurningAirline.Views.AppView = Backbone.View.extend({
  el: '#main',
  events: {
  	'submit': 'addSearch'
  },

  addSearch: function(event){
  	event.preventDefault();
  	var contentOrigin = $('#origin').val();
  	var contentDestination = $('#destination').val();

    //Goes through the collection of flights. If the search input matches the details of a flight, display this flight.
    $.each(this.collection.models, function(index, model){
     	if(contentOrigin == model.attributes.origin){
			console.log(model.attributes.flight_no)
			$('li').hide();
			var view = new BurningAirline.Views.FlightListView({model:model});
      		$('#flights').append(view.render().el);
		}
	});
  },

  initialize: function () {
    this.template = _.template($('#appView').html());
  },

  render: function () {
    this.$el.html(this.template());
    console.log("I am in AppView");

    this.collection.each(function (flight) {
      var view = new BurningAirline.Views.FlightListView({model:flight});
      $('#flights').append(view.render().el);
    });
  }
});

