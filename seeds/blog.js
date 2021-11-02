const { Blog } = require("../models");

const blogData = [
  {
    title: "Rivian goes public!",
    post_content:
      "Rivian has filed to go public and is now available for early investors.",
    user_id: 3,
  },
  {
    title: "High performing blog ideas!",
    post_content: "How do brands constantly come up with brilliant blog ideas?",
    user_id: 1,
  },
  {
    title: "New benefits from walking!",
    post_content:
      "Researchers find that walking briskly puts women a 2.86x more likely to age healthily than those who walk at a moderate pace.",
    user_id: 5,
  },
];

const seedBlog = () => Post.bulkCreate(blogData);

module.exports = seedBlog;
