import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../app';
import User from '../models/users.model';

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
  describe('GET: / listUsers', () => {
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
  describe('POST: / createUser', () => {
    it('it should NOT POST an User without EMAIL field', (done) => {
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
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('message');
          done();
        });
    });
    it('it should NOT POST an User with weak password field', (done) => {
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
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error');
          res.body.should.have.property('message');
          done();
        });
    });
    it('it should  POST an User', (done) => {
      const user = {
        userName: 'jhondoe1992',
        password: 'JhonPassword123456**',
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
          res.body.email.should.be.equal(user.email);
          res.body.shoud.have.property('email');
          res.body.email.should.be.equal(user.userName);
          done();
        });
    });
  });
  // TODO write these tests
  describe('POST: /users/login loginUser', () => {
    it('it should NOT allow user to login with wrong username / password', (done) => {});
    it('it should NOT allow user to login with wrong email / password', (done) => {});
    it('it should allow user to login with username / password', (done) => {});
    it('it should allow user to login with email / password', (done) => {});
    it('it should throw an error is password is missing on the request', (done) => {});
  });
});
