const express = require('express'),
    router = express.Router(),
    blogModel = require('../models/blogModel');

const slugify = require('slugify');

router.get('/', async (req, res) => {
    const blogData = await blogModel.getAll();

    res.render('template', {
        locals: {
            title: 'List of Blog',
            data: blogData,
        },
        partials: {
            body: 'partials/blog-list',
        },
    });
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params;
    const executive = await blogModel.getBySlug(slug);

    if (executive) {
        res.render('template', {
            locals: {
                title: `: ${executive.name}`,
                executive,
            },
            partials: {
                body: 'partials/blog-details',
            },
        });
    } else {
        res.status(404).send(`No Blog found that matches slug, ${slug}`);
    }
});

router.post('/', async (req, res) => {
    const { blog_name, year } = req.body;
    const slug = slugify(blog_name, {
        replacement: '_',
        lower: true,
        strict: true
    });

    const response = await blogModel.addEntry(blog_name, slug, year);
    console.log("post data response is: ", response);
    res.sendStatus(200);
});

router.post('/delete', async (req, res) => {
    const { id, blog_name, slug, year } = req.body;
    const blog = new blogModel(id, blog_name, slug, year);
    const response = await blog.deleteEntry();
    console.log("delete response is: ", response);
    res.sendStatus(200);
})

module.exports = router;