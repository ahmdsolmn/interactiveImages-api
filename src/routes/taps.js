'use strict';

let tapsModel = require('../models/taps');

module.exports = app => {
    app.get('/taps.get', (req, res) => {
        return tapsModel.getAllAndCurrent(req.query.image_id, req.query.user_id)
            .then(data => {
                return res.send({
                    ok: true,
                    data: data,
                });
            })
            .catch(err => {
                return res.send({
                    ok: false,
                    error: err,
                });    
            });
    });

    app.post('/taps.set', (req, res) => {
        tapsModel.setTap(req.body.image_id, req.body.user_id, req.body.location);
        return res.send({
            ok: true,
        });
    });
}