import { Router } from 'express';
import userController from '../controllers/UserController';
const router = new Router();


router.get('/', userController.index);
router.post('/', userController.store);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);

export default router;


/**
 * index => list all users => [verb: GET]
 * store/create => create a new user => [verb: POST]
 * delete => delete one user => [verb: DELETE]
 * show => show one user => [verb: GET]
 * update => update users => [verb: PATCH or PUT]
 */
