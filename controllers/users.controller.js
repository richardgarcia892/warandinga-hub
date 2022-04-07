'use strict';
const UserService = require('../services/users.service');
const service = new UserService();

/* eslint-disable no-unused-vars */
async function getAll(req, res, next) {
  console.log('getAllUsers');
  const users = await service.find();
  res.send(users);
}
function create(req, res, next) {
  console.log('createUser');
  res.send(req.body);
}

function getById(req, res, next) {
  console.log('getUserById');
  res.send(`getUserById ${req.params.id}`);
}

function update(req, res, next) {
  console.log('updateUser');
  res.send(`updateUser ${req.params.id}`);
}

function remove(req, res, next) {
  console.log('deleteUser');
  res.send(`deleteUser ${req.params.id}`);
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  remove,
};
