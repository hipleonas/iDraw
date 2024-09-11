import express from "express";
import bodyParser from "body-parser";
import AccountController from "../Controller/AccountController.js";

const router = express.Router();
router.use(bodyParser.urlencoded({ extended: true }));

router.post('/sign-in', AccountController.PostSignin);

export default router;