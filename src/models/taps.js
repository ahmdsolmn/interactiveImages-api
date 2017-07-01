'use strict';

let _ = require('lodash');

const TAPS = {
    'e1337h': {
        '1576': [12, 35],
        '1326': [24, 75],
        '406': [63, 9],
    }
}

module.exports = {
    //typechecking
    getAllAndCurrent: (imageId, userId) => {
        if(undefined === TAPS[imageId]) {
            return Promise.reject('image_not_found');
        } else {
            let response = {
                All: _.chain(TAPS[imageId])
                    .omit(userId)
                    .map(tap => tap)
                    // .join(',')
                    .value(),
            };

            if(undefined !== TAPS[imageId][userId]) {
                response.Current = TAPS[imageId][userId];
            }

            return Promise.resolve(response);
        }
    },

    setTap: (imageId, userId, location) => {
        _.set(TAPS, `${imageId}.${userId}`, location);
        return true;
    }
}
