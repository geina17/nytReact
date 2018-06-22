var mongoose = require("mongoose");

var Schema = mongoose.Schema;

//Create a new UserSchema object
var ArticleSchema = new Schema({

	title: {
		type: String,
		required: true
	},
	link: {
		type: String,
		required: true
	},
	// `note` is an object that stores a Note id
	// The ref property links the ObjectId to the Note model
	// This allows us to populate the Article with an associated Note
	note: {
		type: Schema.Types.ObjectId,
		ref: "Note"
	}
});

// This creates the model
var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;