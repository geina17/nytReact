import axios from 'axios';

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
const APIKEY = "?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

export default {
	//query nyt API for relevant articles
	getArticles: function (query) {
		return axios.get(BASEURL + APIKEY + "&q=" + query);
	},
	//load all articles saved to mongo
	loadSaved: function () {
		return axios.get("/api/articles");
	},
	// Deletes the article with the given id
	deleteArticle: function (id) {
		return axios.delete("/api/articles/" + id);
	},
	// Saves a book to the database
	saveArticle: function (bookData) {
		return axios.post("/api/articles", bookData);
	}
};