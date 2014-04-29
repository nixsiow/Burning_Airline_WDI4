BunringAirlineAjax.Routers.appRouter = Backbone.Router.extend({
  routes: {
    '': 'index',
    'tweets/:id': 'showTweet',
    '*anything': 'goHome'
  },

  index: function () {
    var view = new TwitterAjax.Views.AppView({collection: TwitterAjax.twitterTweets});
    view.render();
  },

  showTweet: function (id) {
    var tweet = TwitterAjax.twitterTweets.get(id);
    new TwitterAjax.Views.TweetView({model: tweet});
  },

  goHome: function () {
    document.location.hash = '';
  }
});