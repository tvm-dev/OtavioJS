import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      const { id, name, email } = newUser;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // index: show all users:
  async index(req, res) {
    try {
      const user = await User.findAll({ attributes: ['id', 'name', 'email'] });
      // console.log('USER ID:', req.userId);
      // console.log('USER EMAIL:', req.userEmail);
      return res.json(user);
    } catch (error) {
      return res.json(null);
    }
  }

  // show user:
  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      const { id, name, email } = user;
      return res.json({ id, name, email });
    } catch (error) {
      return res.json(null);
    }
  }

  // update
  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User do not exist!'],
        });
      }
      const userUpdated = await user.update(req.body);
      const { id, name, email } = userUpdated;
      return res.json({ id, name, email });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // delete
  async delete(req, res) {
    try {
      const user = await User.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['User do not exist!'],
        });
      }
      await user.destroy();
      return res.json('User was deleted!');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new UserController();
