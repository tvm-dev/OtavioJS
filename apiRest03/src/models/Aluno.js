import Sequelize, { Model } from 'sequelize';
// const { Sequelize } = require('sequelize');

export default class Alunos extends Model {
  static init(sequelize) {
    super.init({
      name: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Name need to have between 3 and 255 characters!',
          },
        },
      },

      surname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Surname need to have between 3 and 255 characters!',
          },
        },
      },
      email: {
        type: Sequelize.STRING,
        defaultValue: '',
        unique: {
          msg: 'This e-mail already registered!',
        },
        validate: {
          isEmail: {
            msg: 'Invalid E-mail, chech then!',
          },
        },
      },
      age: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Age need to be a integer number! Check.',
          },
        },
      },
      weight: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Weight need to be a integer number or a float number, chech then!',
          },
        },
      },
      height: {
        type: Sequelize.FLOAT,
        defaultValue: '',
        validate: {
          isFloat: {
            msg: 'Height need to be a integer number or a float number, chech then!',
          },
        },
      },
    }, {
      sequelize,
    });
    return this;
  }

  // static associate(models) {
  //   this.hasOne(models.Photo, { foreignKey: 'aluno_id' });
  // }
}
