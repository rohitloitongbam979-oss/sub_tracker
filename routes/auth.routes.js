 import { Router } from 'express';
 const authRouter=Router();
 import {signIn,signUp,signOut}  from '../controllers/auth.controller.js';

 //path: /api/v1/auth/sign-up (POST)
 authRouter.post('/sign-up',signUp);
 authRouter.post('/sign-in',signIn);
 authRouter.post('/sign-out',signOut);
 export default authRouter;