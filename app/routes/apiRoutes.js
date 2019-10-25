var friends = require("../data/friends.js");

module.exports = function(app) {
    app.get("/api/friends.js", function (req, res) {
        return res.json(friends)
    })

    app.post("/api/friends.js", function (req, res){
        
    })
}