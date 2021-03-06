App.Routers.Main = Backbone.Router.extend({
	initialize: function() {
		console.log('App Ready...');

		App.home = new App.Views.Home();
		App.home.render();

		App.loginPopup = new App.Views.LoginPopup();

		App.presentationView = new App.Views.PresentationView({ model: new App.Models.UserPresentation });

		App.presentations = new App.Collections.UserPresentations();
		App.presentations.fetch();

	},
	routes: {
		"login": "loginWindow",
		"create": "createPresentation",
		"preview_one": "preview_one",
		"presentations/:presentation_id": "showPresentation"
	},
	loginWindow: function() {
		App.loginPopup.render();
	},
  createPresentation: function() {
    App.createPresentation.render();
  },
  preview_one: function() {
  	App.previewOne = new App.Views.PreviewOne();
  	App.previewOne.render();
  },
  showPresentation: function(presentation_id) { 
  	App.presentations.fetch({
  		success: function() {
  			var presentation = App.presentations.get(presentation_id);
  			App.presentationView.setPresentation(presentation)
  		}
  	})
  }
});


