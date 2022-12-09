import Student from '../models/Student';

class HomeController {
	async index(req, res) {
		const newStudent = await Student.create({
			name: 'Emily',
			surname: 'Menezes',
			email: 'diva@gmail.com',
			age: 3,
			weight: 14,
			height: 1.22,
		});
		res.json(newStudent);
	}
}
export default new HomeController();
