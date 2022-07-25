import boom from '@hapi/boom';
import User from '../models/users.model';
import { userDbErrors } from '../enums/db.enums';
import bcrypt from 'bcrypt';
import config from '../config';

class UserService {
  notFoundError(id) {
    throw boom.notFound(`User (${id}) not found`);
  }

  async create(data) {
    try {
      const salt = bcrypt.genSaltSync(parseInt(config.saltRounds));
      data.password = bcrypt.hashSync(data.password, salt);
      const user = await User.create(data);
      return user;
    } catch (error) {
      if (error.message === userDbErrors.emailAlreadyExist || userDbErrors.userNameAlreadyExist) {
        throw boom.badRequest(error.message);
      } else {
        throw boom.internal(error);
      }
    }
  }

  async login(data) {
    try {
      const { userName, email, password } = data;
      const user = await User.findOne({ $or: [{ userName }, { email }] });
      const passMatch = bcrypt.compareSync(password, user.password);
      // TODO: Implement JWT Tokens
      if (passMatch) {
        return passMatch;
      } else {
        // TODO: Improve this workflow
        throw new Error();
      }
    } catch (error) {
      throw boom.unauthorized('user or email does not match with given password');
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
