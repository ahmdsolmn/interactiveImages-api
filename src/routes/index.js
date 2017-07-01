'use strict';

module.exports = app => {
    require('./images')(app);
    require('./taps')(app);
}