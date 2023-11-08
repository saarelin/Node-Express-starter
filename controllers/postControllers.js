exports.getAllPosts = async (req, res, next) => {
  res.send("Get all posts route");
};

exports.createNewPost = async (req, res, next) => {
  res.send("Create new post route");
};

exports.getPostById = async (req, res, next) => {
  res.send("Get post by ID route");
};
