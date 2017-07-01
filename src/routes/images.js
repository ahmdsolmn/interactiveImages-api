'use strict';

let imagesModel = require('../models/images');

module.exports = app => {
    app.get('/images.get', (req, res) => {
        return imagesModel.getImage(req.query.image_id)
            .then(image => { 
                return res.send({
                    ok: true,
                    data: image,
                });
            })
            .catch(err => {
                // This could be wrapped if you don't want to expose model errors to client
                return res.send({
                    ok: false,
                    error: err,
                });
            });
    });

    // optional
    // app.get('/images.set', (req, res) => {
        
    // });
}