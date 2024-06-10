const Tweet = require('../models/Tweet');

const createTweet = async (req, res) => {
  const { content } = req.body;

  const tweet = new Tweet({
    content,
    user: req.user._id,
  });

  const createdTweet = await tweet.save();
  res.status(201).json(createdTweet);
};

const getTweets = async (req, res) => {
  const tweets = await Tweet.find({}).populate('user', 'username').sort({ createdAt: -1 });
  res.json(tweets);
};

module.exports = { createTweet, getTweets };
