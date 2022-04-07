'use strict';
process.env.NODE_ENV = 'test';
const app = require('../app');
const User = require('../models/users.model');
const chai = require('chai');
const chaiHttp = require('chai-http');

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
    let user = {
      title: 'The Lord of the Rings',
      author: 'J.R.R. Tolkien',
      year: 1954,
    };
    chai
      .request(app)
      .post('/book')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('errors');
        res.body.errors.should.have.property('pages');
        res.body.errors.pages.should.have.property('kind').eql('required');
        done();
      });
  });
});

//   it('it should POST a book ', (done) => {
//     let book = {
//       title: 'The Lord of the Rings',
//       author: 'J.R.R. Tolkien',
//       year: 1954,
//       pages: 1170,
//     };
//     chai
//       .request(app)
//       .post('/book')
//       .send(book)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         res.body.should.have
//           .property('message')
//           .eql('Book successfully added!');
//         res.body.book.should.have.property('title');
//         res.body.book.should.have.property('author');
//         res.body.book.should.have.property('pages');
//         res.body.book.should.have.property('year');
//         done();
//       });
//   });
// });
// describe('/GET/:id book', () => {
//   it('it should GET a book by the given id', (done) => {
//     let book = new Book({
//       title: 'The Lord of the Rings',
//       author: 'J.R.R. Tolkien',
//       year: 1954,
//       pages: 1170,
//     });
//     book.save((err, book) => {
//       chai
//         .request(app)
//         .get('/book/' + book.id)
//         .send(book)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('title');
//           res.body.should.have.property('author');
//           res.body.should.have.property('pages');
//           res.body.should.have.property('year');
//           res.body.should.have.property('_id').eql(book.id);
//           done();
//         });
//     });
//   });
// });
// describe('/PUT/:id book', () => {
//   it('it should UPDATE a book given the id', (done) => {
//     let book = new Book({
//       title: 'The Chronicles of Narnia',
//       author: 'C.S. Lewis',
//       year: 1948,
//       pages: 778,
//     });
//     book.save((err, book) => {
//       chai
//         .request(app)
//         .put('/book/' + book.id)
//         .send({
//           title: 'The Chronicles of Narnia',
//           author: 'C.S. Lewis',
//           year: 1950,
//           pages: 778,
//         })
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have.property('message').eql('Book updated!');
//           res.body.book.should.have.property('year').eql(1950);
//           done();
//         });
//     });
//   });
// });
// /*
//  * Test the /DELETE/:id route
//  */
// describe('/DELETE/:id book', () => {
//   it('it should DELETE a book given the id', (done) => {
//     let book = new Book({
//       title: 'The Chronicles of Narnia',
//       author: 'C.S. Lewis',
//       year: 1948,
//       pages: 778,
//     });
//     book.save((err, book) => {
//       chai
//         .request(app)
//         .delete('/book/' + book.id)
//         .end((err, res) => {
//           res.should.have.status(200);
//           res.body.should.be.a('object');
//           res.body.should.have
//             .property('message')
//             .eql('Book successfully deleted!');
//           res.body.result.should.have.property('ok').eql(1);
//           res.body.result.should.have.property('n').eql(1);
//           done();
//         });
//     });
//   });
// });
