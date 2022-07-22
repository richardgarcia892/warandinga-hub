import boom from '@hapi/boom';
import User from '../models/users.model';

class UserService {
  notFoundError(id) {
    throw boom.notFound(`User (${id}) not found`);
  }

  dbError(error) {
    throw boom.internal(`${error}`);
  }

  async create(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      return dbError(error);
    }
  }

  async findAll() {
    const users = await User.find();
    return users;
  }

  async findOne(query) {
    try {
      const user = await User.findById(query);
      return user;
    } catch (error) {
      return this.notFoundError(query);
    }
  }

  async update(id, changes) {
    try {
      const user = await User.findOneAndUpdate({ id }, { ...changes });
      await user.save();
      return user;
    } catch (error) {
      return this.notFoundError(id);
    }
  }

  async remove(id) {
    try {
      const user = await User.findOneAndDelete({ id });
      return user;
    } catch (error) {
      return this.notFoundError(id);
    }
  }
}

export default UserService;
