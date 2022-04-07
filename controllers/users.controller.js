'use strict';
const UserService = require('../services/users.service');
const service = new UserService();

/* eslint-disable no-unused-vars */
async function getAll(req, res, next) {
  try {
    const users = await service.find();
    res.send(users);
  } catch (error) {
    next(error);
  }
}
async function create(req, res, next) {
  try {
    const { body } = req;
    const user = await service.create(body);
    res.send(201, user);
  } catch (error) {
    next(error);
  }
}

async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await service.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    res.send(`updateUser ${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

async function remove(req, res, next) {
  try {
    res.send(`deleteUser ${req.params.id}`);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getById,
  getAll,
  create,
  update,
  remove,
};
