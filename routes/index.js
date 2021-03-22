const express = require('express');
const router = express.Router();

// model
const Post = require('../models/Post');

// ok
router.get('/all_posts', async (req, res) => {

    await Post.find({}, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result)
        }
    })
})


// @ok
router.get('/post/:id', async (req, res) => {

    const { id } = req.params;

    console.log(req.params)

    await Post.findById({ _id: id }, (err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result);
        }
        else {
            res.json({
                message: "There is no post in this id !"
            })
        }
    })

})

// ok
router.put('/post/update/:id', async (req, res) => {

    const { id } = req.params;

    const data = {
        title: req.body.title,
        description: req.body.description
    }

    console.log(data)

    await Post.findByIdAndUpdate({ _id: id },
        data,
        { new: true, runValidators: true },
        (err, result) => {
            if (err) throw err;
            if (result) {
                res.json(result);
            }
            else {
                res.json({
                    message: "There is no post in this id !"
                })
            }
        })

})


//@ok

router.post('/add_post', (req, res) => {

    const { title, description } = req.body;

    console.log(req.body);

    const newPost = new Post({
        title, description
    })

    newPost.save((err, result) => {
        if (err) throw err;
        if (result) {
            res.json(result);
            console.log(result)
        }
        else {
            res.json('SOMETHING IS REALLY WRONG !!!')
        }
    })

})


router.post('/delete_post', async (req, res) => {

    const { id } = req.body.id;

    await Post.findOneAndDelete({ id },
        (err, result) => {
            if (err) throw err;
            if (result) {
                res.json({ msg: "Post Deleted Succesfully !" });
            }
            else {
                res.json({
                    message: "There is no post in this id !"
                })
            }
        })

})


module.exports = router;