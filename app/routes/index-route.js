import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [{
			source_image: 'http://images6.fanpop.com/image/photos/34600000/Simone-simone-simons-34606110-1024-768.jpg',
			title: 'Titulo 1',
			user_path: 'User Path 1',
			tags: [{
				title: 'Musica'
			},{
				title: 'Video'
			}]
		}];
	}
});
