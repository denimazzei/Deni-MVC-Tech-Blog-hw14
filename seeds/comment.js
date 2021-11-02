const { Comment } = require("../models");

const commentData = [
  {
    user_id: 1,
    post_id: 5,
    comment_text: "Great article!",
  },
  {
    user_id: 4,
    post_id: 4,
    comment_text: "I didn't know this!",
  },
  {
    user_id: 1,
    post_id: 4,
    comment_text: "I don't think this info is accurate.",
  },
];

const commentSeeds = () => Comment.bulkCreate(commentData);

module.exports = commentSeeds;
