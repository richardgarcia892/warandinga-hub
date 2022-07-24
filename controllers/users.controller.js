import UserService from '../services/users.service';

const userService = new UserService();

async function getAll(req, res, next) {
  try {
    const users = await userService.findAll();
    res.send(users);
  } catch (error) {
    next(error);
  }
}
async function create(req, res, next) {
  try {
    const { body } = req;
    const user = await userService.create(body);
    const response = { userName: user.userName, email: user.email };
    res.status(201).send(response);
  } catch (error) {
    next(error);
  }
}
async function getById(req, res, next) {
  try {
    const { id } = req.params;
    const user = await userService.findOne(id);
    res.json(user);
  } catch (error) {
    next(error);
  }
}
async function update(req, res, next) {
  try {
    res.send({ func: 'updateUser', params: req.params, body: req.body });
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

export { getById, getAll, create, update, remove };
