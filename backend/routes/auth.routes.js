import { Router } from "express";
import { signIn, signUp } from "../controller/auth.controller.js";

const authRouter = Router();

authRouter.post("/sign-up", signUp); //Path: /api/v1/auth/sign-up

authRouter.post("/sign-in", signIn); //Path: /api/v1/auth/sign-in

export default authRouter;
