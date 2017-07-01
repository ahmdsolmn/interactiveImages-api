'use strict';

// this should be retrieved from a database
const IMAGES = {
    'e1337h': 'http://www.timvandevall.com/wp-content/uploads/plant-cell-diagram.jpg',
}

module.exports = {
    getImage: imageId => {
        if(undefined === IMAGES[imageId]) {
            return Promise.reject('image_not_found');
        } else {
            return Promise.resolve(IMAGES[imageId]);
        }
    },
}