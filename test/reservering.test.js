const assert = require('assert');

// Change dao to the desired testing subject
const dao = require('../src/data/dummy.DAO');

describe('Admin reserveringen ophalen DAO response testing', () => {

    it('Should return all reservations', done => {
        const result = dao.getAllReservations();
        assert(result, 'DAO should return all reservations');
        done();
    })

    it('Should contain all correct atributes', done => {
        
        const result = dao.getAllReservations();
        let i;
        
        for (i = 0; i < result.length; i++) { 
            assert(result[i].title,         'DAO should contain title')
            assert(result[i].start,         'DAO should contain start')
            assert(result[i].end,           'DAO should contain end')
            assert(result[i].name,          'DAO should contain name')
            assert(result[i].name.first,    'DAO should contain firstname')
            assert(result[i].name.last,     'DAO should contain lastname')
            assert(result[i].period,        'DAO should contain periode')
            assert(result[i].address,       'DAO should contain address')
            assert(result[i].time,          'DAO should contain time')
        }
        done();
    })
})