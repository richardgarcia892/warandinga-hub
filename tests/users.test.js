const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const User = require('../models/users.model');

process.env.NODE_ENV = 'TEST';

chai.should();
chai.use(chaiHttp);

describe('Users', () => {
  beforeEach((done) => {
    User.remove({}, (err) => {
      console.error(err);
      done();
    });
  });
  describe('/GET Users', () => {
    it('it should GET all the users', (done) => {
      chai
        .request(app)
        .get('/api/v1/users')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.an('array');
          res.body.should.have.lengthOf(0);
          done();
        });
    });
  });
  describe('/POST User', () => {});
  it('it should not POST an User without EMAIL field', (done) => {
    const user = {
      userName: 'jhondoe1992',
      password: 'JhonPassword',
      firstName: 'Jhon',
      lastName: 'Doe',
    };
    chai
      .request(app)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(500);
        res.body.should.be.a('object');
        res.body.should.have.property('error');
        res.body.should.have.property('message');
        res.body.message.should.be.eql('An internal server error occurred');
        done();
      });
  });
  it('it should  POST an User', (done) => {
    const user = {
      userName: 'jhondoe1992',
      password: 'JhonPassword',
      email: 'jhondoe@email.com',
      firstName: 'Jhon',
      lastName: 'Doe',
    };
    chai
      .request(app)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        res.body.shoud.have.property('userName');
        res.body.shoud.have.property('email');
        done();
      });
  });
});
