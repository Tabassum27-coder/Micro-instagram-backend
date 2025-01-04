const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.get('/', postController.getAllPosts);
router.get('/user/:id', postController.getPostsByUser);
router.post('/user/:id', postController.createPost);
router.put('/:id', postController.editPost);
router.delete('/:id', postController.deletePost);

module.exports = router;
