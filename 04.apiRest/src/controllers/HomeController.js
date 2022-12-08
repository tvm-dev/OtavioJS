import Student from '../models/Student';

class HomeController {
  async index(req, res) {
    const newStudent = await Student.create({
      name: 'Thiago',
      surname: 'Viana',
      email: 'senadorx@gmail.com',
      age: 38,
      weight: 90,
      height: 1.84,

    });
    res.json(newStudent);
  }
}

export default new HomeController();
