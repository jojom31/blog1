const express = require('express');
    router = express.Router();

    router.get('/', (req, res) => {
        res.render('templates', {
            locals: {
                title: "Home Page"
            },
            partials: {
                body: "partials/home"        
                },
        });
    });

    module.exports = router;















module.exports = router;