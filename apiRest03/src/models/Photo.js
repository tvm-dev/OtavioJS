import Sequelize, { Model } from 'sequelize';
import appConfig from '../config/appConfig';


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

      url: {
        type: Sequelize.VIRTUAL,
        get(){
          return `${appConfig.url}/images/${this.getDataValue('filename')}`
        }
      }

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
