

//fetching the friends data
var friends = require('../data/friends.js');


module.exports = function(app){


app.post("/api/friends", function(req, res) {
	
	var userData = JSON.parse(req.body.userData);

	var userScores = userData.scores;

	var matchName = '';
	var matchImage = '';
	var maxDiff = 10000;

	//going through all the friends data
	for (var i = 0; i < friends.length; i++) {

		var scoreDiff = 0;
		for (var j = 0; j < userScores.length; j++) {

			scoreDiff += Math.abs(friends[i].scores[j] - userScores[j]); 

		}
		// console.log("score diff:"+scoreDiff);
		//friend with the lower difference will be saved
		if(maxDiff > scoreDiff){

			maxDiff = scoreDiff;
			matchName = friends[i].name;
			matchImage = friends[i].data;


		}
	}
	
	friends.push(userData);
	res.json({'status': 'ok', 'matchName': matchName, 'matchImage': matchImage});	
});

};
//exporting API routes
module.exports = app;
