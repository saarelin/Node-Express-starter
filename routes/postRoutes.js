const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(postControllers.createNewPost);

router
  .route("/:id")
  .get(postControllers.getPostById)
  .put(postControllers.updatePost)
  .delete(postControllers.deleteById);

module.exports = router;
