import express from 'express';
import { registerUser, login } from '../controller/auth.ts';
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", login)
export default router;