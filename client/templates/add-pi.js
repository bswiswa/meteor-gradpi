Template.addpi.events({
	'click #piSubmit': function(event,template) {
		event.preventDefault();
		// advisors.insert({	
     	var name = template.find("#name").value;
     	var school = template.find("#school").value;
      	// Advisors.insert({
       //    	name: name,
       //    	school: school
       //  });
			// s: 0,
			// m: 0,
			// a: 0,
			// r: 0,
			// t: 0,
			// f: null
		// })
	Meteor.call('add_advisor',name,school);
	Router.go('/');
	}
})