const { Post } = require('../models');

const postData = [
    {
      "title": "Vegan Life",
      "content": "Living a sustainable life",
      "user_id": 1
    },
    {
      "title": "Healthcare",
      "content": "Striving for a more integrative care for all.",
      "user_id": 2
    },
    {
      "title": "Spirituality",
      "content": "Allowing yourself to be your most vulnerable and having awareness of a higher power",
      "user_id": 3
    }
  ];
  


const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;