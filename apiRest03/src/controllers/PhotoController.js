import multer from 'multer';
import multerConfig from '../config/multerConfig';

import Photo from '../models/Photo';

const upload = multer(multerConfig).single('photo');

class Photocontroller {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { aluno_id } = req.body;
        const photo = await Photo.create({ aluno_id, originalname, filename });
        return res.status(200).json({ photo });

      } catch (error) {
        return res.status(400).json({
          errors: [`Student don't exist!`],
        });
      }
    });
  }
}

export default new Photocontroller();
