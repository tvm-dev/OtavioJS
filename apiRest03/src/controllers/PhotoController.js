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
      const { originalname, filename } = req.file;
      const { aluno_id } = req.body;
      const photo = await Photo.create({ aluno_id, originalname, filename });

      // console.log('===================start==================');
      // console.log(aluno_id);
      // console.log(photo);
      // console.log('==================fim==================');

      // return res.json(aluno_id, photo);
      return res.status(200).json({ aluno_id, photo });
    });
  }
}

export default new Photocontroller();
