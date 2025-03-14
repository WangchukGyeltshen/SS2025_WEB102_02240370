const dataStore = require('../models');

// GET all comments
const getAllComments = (req, res) => {
    res.status(200).json(dataStore.comments);
};

// GET comments by video ID
const getCommentsByVideoId = (req, res) => {
    const videoId = parseInt(req.params.videoId);

    if (isNaN(videoId)) {
        return res.status(400).json({ error: 'Invalid video ID' });
    }

    const comments = dataStore.comments.filter(c => c.videoId === videoId);
    res.status(200).json(comments);
};

// POST create a new comment
const createComment = (req, res) => {
    const { userId, videoId, content } = req.body;

    if (!userId || !videoId || !content) {
        return res.status(400).json({ error: 'Required fields missing' });
    }

    if (!dataStore.users.some(user => user.id === userId)) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (!dataStore.videos.some(video => video.id === videoId)) {
        return res.status(404).json({ error: 'Video not found' });
    }

    const newComment = {
        id: dataStore.nextIds.comments++,
        userId,
        videoId,
        content,
        createdAt: new Date().toISOString()
    };

    dataStore.comments.push(newComment);
    res.status(201).json(newComment);
};

// PUT update a comment
const updateComment = (req, res) => {
    const commentId = parseInt(req.params.id);

    if (isNaN(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const { content } = req.body;

    if (!content) {
        return res.status(400).json({ error: 'Content is required' });
    }

    dataStore.comments[commentIndex].content = content;
    dataStore.comments[commentIndex].updatedAt = new Date().toISOString();

    res.status(200).json(dataStore.comments[commentIndex]);
};

// DELETE a comment
const deleteComment = (req, res) => {
    const commentId = parseInt(req.params.id);

    if (isNaN(commentId)) {
        return res.status(400).json({ error: 'Invalid comment ID' });
    }

    const commentIndex = dataStore.comments.findIndex(c => c.id === commentId);
    
    if (commentIndex === -1) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    dataStore.comments.splice(commentIndex, 1);

    res.status(204).end();
};

module.exports = {
    getAllComments,
    getCommentsByVideoId,
    createComment,
    updateComment,
    deleteComment
};
