import express  from "express";
const router = express.Router();
import { registerRender, loginRender } from "../controller/usersControllers.js";

router.get('/register', registerRender);
router.get('/login', loginRender);

export default router;