const chai = require('chai');
const supertest = require('supertest');
const app = require('../app');
const should = chai.should()

describe('superhero routes', function(){
    it('returns the array of superheroes at index route', function(done){
        supertest(app)
            .get('/superheroes')
            .expect(200)
            .expect((response)=>{
                const heroes = response.body;
                heroes.length.should.be.eq(3);
            })
            .end(done);
    })
    it('returns a specific superhero by index', function(done){
        supertest(app)
        .get('/superheroes/0')
        .expect(200)
        .expect((response)=>{
            //if using res.json, change response.text to response.body
            const hero = response.text;
            hero.should.be.eq('batman');
            hero.should.not.be.eq('superman');
        })
        .end(done)
    })
})