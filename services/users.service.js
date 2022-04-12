/* eslint-disable no-underscore-dangle */
const boom = require('@hapi/boom');

const User = require('../models/users.model');

function notFoundError(id) {
  throw boom.notFound(`User (${id}) not found`);
}

function dbError(error) {
  throw boom.internal(`${error}`);
}

async function create(data) {
  try {
    const user = await User.create(data);
    return user;
  } catch (error) {
    return dbError(error);
  }
}

async function findAll() {
  const users = await User.find();
  return users;
}

async function findOne(query) {
  try {
    const user = await User.findById(query);
    return user;
  } catch (error) {
    return notFoundError(query);
  }
}

async function update(id, changes) {
  try {
    const user = await User.findOneAndUpdate({ id }, { ...changes });
    await user.save();
    return user;
  } catch (error) {
    return notFoundError(id);
  }
}

async function remove(id) {
  try {
    const user = await User.findOneAndDelete({ id });
    return user;
  } catch (error) {
    return notFoundError(id);
  }
}

module.exports = { create, findAll, findOne, update, remove };
