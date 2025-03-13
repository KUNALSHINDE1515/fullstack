import express from "express";
import { regesterUser } from "../controller/user.controller.js";

const router = express.Router()

router.get("/register" , regesterUser)

export default router;