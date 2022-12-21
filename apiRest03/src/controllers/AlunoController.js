import Aluno from '../models/Aluno';
import Photo from '../models/Photo';



// INDEX====================
class AlunoController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'name', 'surname','email','age','weight','height'],
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
      include: {
        model: Photo,
        attributes: ['filename']
      },
    });

    res.json(alunos);
  }

  // STORE ====================
  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  // SHOW ====================
  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'name', 'surname','email','age','weight','height'],
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']],
        include: {
          model: Photo,
          attributes: ['filename']
        },
      });

      if (!aluno) {
        return res.status(400).json({
          errors: ['Students do not exist!'],
        });
      }

      return res.json(aluno);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // DELETE ====================
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Student do not exist!'],
        });
      }

      await aluno.destroy();
      return res.json('Student was deleted successfully.');
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // UPDATE ====================
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.sendStatus(400).json({
          errors: ['Missing ID'],
        });
      }

      const aluno = await Aluno.findByPk(id);

      if (!aluno) {
        return res.status(400).json({
          errors: ['Students do not exist!'],
        });
      }

      const studentUpdated = await aluno.update(req.body);

      return res.json(studentUpdated);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}
export default new AlunoController();
