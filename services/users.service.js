const boom = require('@hapi/boom');

const User = require('../models/users.model');

class UserService {
  constructor() {}

  _notFoundError(id) {
    throw boom.notFound(`User (${id}) not found`);
  }
  async create(data) {
    const user = await User.create(data);
    return user;
  }

  async find() {
    const users = await User.find();
    return users;
  }

  async findOne(id) {
    const user = User.findOne({ id });
    if (!user) this._notFoundError(id);
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
