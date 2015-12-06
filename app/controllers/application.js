import Ember from 'ember';

export default Ember.Controller.extend({
	sidebarLeftVisible: false,
	sidebarLeftLocked: Ember.computed('media.isDesktop', function() {
		return this.get('media.isDesktop');
	}),
	fab_dial: {
		isOpen: false,
		selectedMode: 'md-scale',
		selectedDirection: 'left'
	},
	actions: {
		toggleSidebarLeft: function(){
			this.toggleProperty('sidebarLeftVisible');
		},
		toggleSearchBar: function(){
			alert('search');
		},
	}
});
