var friends = require("../data/friends");

module.exports = function (app) {

    // get method
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    // post method (include math logic)
    app.post("/api/friends", function (req, res) {
        var bestMatch = {
            name: "",
            photo: "",
            difference: 100
        }
        var userData = req.body;
        var userName = userData.name;
        var userPhoto = userData.photo;
        var userScores = userData.scores;

        var totalDifference = 0;

        for (var i = 0; i < friends.length; i++) {

            totalDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(friends[i].scores[j]));

                // update every iteration with the match that has the lowest minimum
                if (totalDifference < bestMatch.difference) {
                    
                    bestMatch.name = friends[i].name;
                    bestMatch.photo = friends[i].photo;
                    bestMatch.difference = totalDifference;
                    
                }
            }
        }

        // adds new data to friends array on submit
        friends.push(userData);

        res.json(bestMatch);

    });

}