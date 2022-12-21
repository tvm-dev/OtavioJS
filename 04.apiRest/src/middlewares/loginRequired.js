import jwt from 'jsonwebtoken';
// const jwt = require('jsonwebtoken');
import User from '../models/User';

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login Required!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    // console.log(text, token);
    const datas = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = datas;
    const user = await User.findOne({ where: { id, email } });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid User!'],
      });
    }

    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Invalid Token!'],
    });
  }
};
