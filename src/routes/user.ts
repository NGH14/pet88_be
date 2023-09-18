/**
 * @swagger
 * tags:
 *   name: users
 *   description: The Users managing API
 */

import express from 'express';
import {
	CreateUser,
	GetAllUser,
	UpdateUserById,
	DeleteUserById,
	DeleteUsers,
	GetUserByID,
	CreateUsers,
	DeleteUserByEmail,
} from '../controller/user.ts';

const router = express.Router();

/**
 * @swagger
 * /users:
 *  get:
 *     tags: [users]
 *     description: Responds show all users
 *     responses:
 *       200:
 *         description: Get list users success
 */
router.get('/', GetAllUser);
router.get('/:id', GetUserByID);

router.post('/', CreateUser);
router.post('/list', CreateUsers);

router.put('/:id', UpdateUserById);

router.delete('/:id', DeleteUserById);
router.patch('/:email', DeleteUserByEmail);

router.patch('/multiple-delete', DeleteUsers);

export default router;
