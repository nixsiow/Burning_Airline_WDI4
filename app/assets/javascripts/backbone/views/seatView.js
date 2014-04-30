BurningAirline.Views.seatListView = Backbone.View.extend({
  el: '#main',
  events: {
  },
  initialize: function () {
    this.template = _.template($('#seats').html());
    
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
    return this;
  }  

  
    });