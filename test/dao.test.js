const assert = require('assert');

// Change dao to the desired testing subject
const dao = require('../src/data/dummy.DAO');

describe('Admin login DAO response testing', () => {

    it('should allow credentials to be posted', done => {
        const user = 'test@test.nl';
        const pass = 'password'

        const result = dao.postAdminCredentials(user, pass);
        assert(result, 'DAO should return a reponse for this method');
        done();
    })

    it('should return INVALID_CREDENTIALS with an empty username', done => {
        const user = '';
        const pass = 'password'

        const result = dao.postAdminCredentials(user, pass);
        assert.equal(result, 'INVALID_CREDENTIALS', 'DAO should return a reponse for this method');
        done();
    })

    it('should return INVALID_CREDENTIALS with an empty password', done => {
        const user = '';
        const pass = 'password'

        const result = dao.postAdminCredentials(user, pass);
        assert.equal(result, 'INVALID_CREDENTIALS', 'DAO should return a reponse for this method');
        done();
    })
})