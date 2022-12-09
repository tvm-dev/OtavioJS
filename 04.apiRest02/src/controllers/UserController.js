import User from '../models/User';

class UserController {
	async store(req, res) {

		try {
			const newUser = await User.create(req.body);
			return res.json(newUser);
		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((err) => err.message),
			});
		}
	}

	//index: show all users:
	async index(req, res) {
		try {
			const allUsers = await User.findAll();
			return res.json(allUsers);
		} catch (error) {
			return res.json(null);
		}
	}

	// show user:
	async show(req, res) {
		try {
			const allUsers = await User.findByPk(req.params.id);
			return res.json(allUsers);
		} catch (error) {
			return res.json(null);
		}
	}

	//update
	async update(req, res) {
		try {
			if (!req.params.id) {
				return res.status(400).json({
					errors: ['Missing ID!'],
				});
			}
			const user = await User.findByPk(req.params.id);

			if (!user) {
				return res.status(400).json({
					errors: ['User do not exist!']
				});
			}
			const userUpdated = await user.update(req.body);
			return res.json(userUpdated);
		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((err) => err.message),
			});
		}
	}

	//delete
	async delete(req, res) {
		try {
			if (!req.params.id) {
				return res.status(400).json({
					errors: ['Missing ID!'],
				});
			}
			const user = await User.findByPk(req.params.id);

			if (!user) {
				return res.status(400).json({
					errors: ['User do not exist!']
				});
			}
			await user.destroy();
			return res.json(user);
		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((err) => err.message),
			});
		}
	}

}
export default new UserController();
