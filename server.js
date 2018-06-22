const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const app = express();

//Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Use static build for hosting
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
}

// Setup API routes
app.use(routes);

// All other requests hit React
app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Connect to Mongo
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/nytreact");

// Start the API server
app.listen(PORT, function () {
	console.log(`API Server now listening on PORT ${PORT}!`);
});