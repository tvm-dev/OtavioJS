import Sequelize, { Model } from 'sequelize';
// const { Sequelize } = require('sequelize');

export default class Photo extends Model {
  static init(sequelize) {
    super.init({
      originalname: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field can not be empty.',
          },
        },
      },
      filename: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field can not be empty.',
          },
        },
      },
      aluno_id: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Field can not be empty: aluno_id',
          },
        },
      },

    }, {
      sequelize,
      tableName: 'photos',
    });
    return this;
  }

  associate(models) {
    this.belongsTo(models.Aluno, { foreignKey: 'aluno_id' });
  }
}
