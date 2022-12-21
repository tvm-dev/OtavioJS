import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// Routes for learning, don't shoud exist em real crud!
// router.get('/', userController.index);
// router.get('/:id', userController.show);

// Real routes:
router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/**
 * index => list all users => [verb: GET]
 * store/create => create a new user => [verb: POST]
 * delete => delete one user => [verb: DELETE]
 * show => show one user => [verb: GET]
 * update => update users => [verb: PATCH or PUT]
 */

// CRUD routes, just for learning(with id):
// router.post('/', userController.store);
// router.get('/', loginRequired, userController.index);
// router.get('/:id', userController.show);
// router.put('/:id', userController.update);
// router.delete('/:id', userController.delete);
