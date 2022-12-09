import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs';


export default class User extends Model {
	static init(sequelize) {
		super.init({
			name: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 255],
						msg: 'Name need have between 3 and 255 characters!'
					},
				},
			},
			email: {
				type: Sequelize.STRING,
				defaultValue: '',
				unique: {
					msg: 'Email already registered!',
				},
				validate: {
					isEmail: {
						args: [3, 255],
						msg: 'Invalid Email!'
					},
				},
			},
			password_hash: {
				type: Sequelize.STRING,
				defaultValue: '',

			},
			password: {
				type: Sequelize.VIRTUAL,
				defaultValue: '',
				validate: {
					len: {
						args: [6, 50],
						msg: 'Password need have between 3 and 255 characters!'
					},
				},
			},

		}, {
			sequelize,
		});
		this.addHook('beforeSave', async user => {
			if (user.password) {
				user.password_hash = await bcryptjs.hash(user.password_hash, 8);
			}
		});
		return this;
	}
}
