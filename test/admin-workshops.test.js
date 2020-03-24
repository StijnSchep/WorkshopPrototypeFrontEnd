const assert = require('assert');

// Change dao to the desired testing subject
const dao = require('../src/data/dummy.DAO');

describe('Admin workshop DAO response testing', () => {

    it('should return an array with the correct attributes', done => {
        const result = dao.getWorkshopData();


        for(let i = 1; i < result.length; i++) {
            assert(result[i].workshop, 'Workshop should have a name');
            assert(result[i].desc, 'Workshop should have a description');
            assert(result[i].url, 'Workshop should have an URL');
        }
        done();
    })

})