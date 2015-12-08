var Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
    Accounts.ui.config({ passwordSignupFields: 'USERNAME_ONLY' });
    Template.form.events = {
        'click #submit': function(event){
            event.preventDefault();
            var title = $('#title').val();
            var body = $('#body').val();
            Posts.insert({
                title: title,
                username: Meteor.user().username,
                body: body
            });
            $('#title, #body').val('');
        }
    }
    Template.posts.helpers({
        posts: function() {
            return Posts.find();
        }
    })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
Router.route('/forumpage');
Router.route('/', {name: 'home',template: 'home'});
Router.route('/about');
Router.route('/pics');
