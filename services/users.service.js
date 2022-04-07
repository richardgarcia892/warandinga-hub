'use strict';
const boom = require('@hapi/boom');

const User = require('../models/users.model');

class UserService {
  constructor() {}

  _notFoundError(id) {
    throw boom.notFound(`User (${id}) not found`);
  }
  _dbError(error) {
    throw boom.internal(error);
  }

  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      this._dbError(error);
    }
  }

  async find() {
    const users = await User.find();
    return users;
  }

  async findOne(id) {
    const user = await User.findOne({ id });
    if (!user) this._notFoundError(id);
    user.toObject({ versionKey: false });
    return user;
  }

  async update(id, changes) {
    const user = User.findOneAndUpdate({ id }, { ...changes });
    if (!user) this._notFoundError(id);
    await user.save();
    return user;
  }

  async delete(id) {
    const user = User.findOneAndDelete({ id });
    if (!user) this._notFoundError(id);
    return user;
  }
}

module.exports = UserService;
