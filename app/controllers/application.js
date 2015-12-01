import Ember from 'ember';

export default Ember.Controller.extend({
	sidebarLeftVisible: false,
	sidebarLeftLocked: Ember.computed('media.isDesktop', function() {
		return this.get('media.isDesktop');
	}),
	actions:{
		toggleSidebarLeft: function(){
			this.toggleProperty('sidebarLeftVisible');
		}
	}
});
