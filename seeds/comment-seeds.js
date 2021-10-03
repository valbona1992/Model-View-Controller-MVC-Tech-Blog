const { Comment } = require('../models');

const commentData = [
	{
		"comment" : "I agree with this@",
		"user_id" : 3,
		"post_id" : 1
	},
	{
		"comment" : "Amazing content!",
		"user_id" : 2,
		"post_id" : 1
	},
	{
		"comment" : "How do we learn more? ",
		"user_id" : 1,
		"post_id" : 3
	}
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;