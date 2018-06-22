const router = require("express").Router();
const articleController = require("../../controllers/articleController");

router.route("/api/articles")

	.get(articleController.findAll)
	.put(articleController.update)
	.delete(articleController.remove);

module.exports = router;