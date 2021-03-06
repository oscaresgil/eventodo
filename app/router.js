import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('index',{path:'/'});
  this.route('session-login',{path:'/login'});
  this.route('session-register',{path:'/register'});

  this.resource('category',{path:'/:title'},function(){
  	this.resource('events',{path:'/'},function(){
      this.resource('event',{path:'/:event_id'},function(){
          this.route('edit',{path:'/edit'});
      });
  	});
  });
});

export default Router;
