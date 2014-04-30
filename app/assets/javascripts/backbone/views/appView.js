BurningAirline.Views.AppView = Backbone.View.extend({
  el: '#main',
  events: {
  	'submit': 'addSearch'
  },

  addSearch: function(event){

  	event.preventDefault();
  	var contentOrigin = $('#origin').val();
  	var contentDestination = $('#destination').val();
  	$('#flights').empty();
  	var matches = [];
  	var error;

  	//When the user makes a search, display the title "All flights"
  	$('.flights_title').show();  	
  	//If statement to check the inputs.
  		//If there is an origin but no destination, display the flights with a match for that origin.
  		if (contentOrigin != '' && contentDestination == ''){
  			error = 'No flights for that origin';
  			//Go through all flights and check if matches on origin
  			$.each(this.collection.models, function(index, model){
     			if(contentOrigin == model.attributes.origin){
     				//push the model in the matches array if there is a match.
     				matches.push(model);
				} 
			});
		//If there is a destination but no origin, display the flights with a match for that destination.
  		} else if (contentOrigin == '' && contentDestination != ''){
  			error = 'No flights for that destination';
  			$.each(this.collection.models, function(index, model){
     			if(contentDestination == model.attributes.destination){
     				matches.push(model);
				}
			});
		//If there is a an origin and a destination, display the matching flights.
  		} else if (contentOrigin != '' && contentDestination != ''){
  			error = 'No matching flights';
  			$.each(this.collection.models, function(index, model){
     			if(contentDestination == model.attributes.destination && contentOrigin == model.attributes.origin){
     				matches.push(model);
				}
			});
		//If search is empty
  		} else {
  			$('#flights').append("Your search is empty, please try again")
  		}
  
  		//If the array matches has matching flights inside, display these flights, otherwise, display the error message.
  		if (matches.length > 0) {
			$.each(matches, function(index, model){
				var view = new BurningAirline.Views.FlightListView({model:model});
				$('#flights').append(view.render().el);
			});
		} else {
			$('#flights').append(error);
		}
  },

  initialize: function () {
    this.template = _.template($('#appView').html());
  },

  render: function () {
    this.$el.html(this.template());
    console.log("I am in AppView");

    this.collection.each(function (flight) {

    var view = new BurningAirline.Views.FlightListView({model:flight});
    //Hide the flights at first. Should be displayed only when the user makes a search
    //$('#flights').append(view.render().el);
    });
  }
});

