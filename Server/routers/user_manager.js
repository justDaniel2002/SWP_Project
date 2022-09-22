import express from "express";
import {deleteMethod, getMethod,postMethod,updateMethod} from '../controller/user_manager.js'

const router = express.Router();

router.get('/',getMethod);
router.post('/',postMethod);
router.post("/update",updateMethod);
router.post("/delete",deleteMethod);
export default router;

