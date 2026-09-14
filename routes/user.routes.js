import {Router } from 'express';
const userRouter=Router();
//static parameter- GET/users-> get all users
//dynamic parameter- GET/users/:id -> get users by ID //1234  // id parameter is dynamic
userRouter.get('/',(req,res)=> res.send({title: 'GET all users'}));


userRouter.get('/:id',(req,res)=>res.send({title :'GET user details'}));

userRouter.post('/',(req,res)=>res.send({title: 'create new users'}));

userRouter.put('/id',(req,res)=>res.send({title :'UPDATE user'}));

userRouter.delete('/:id',(req,res)=>res.send({title: 'DELETE user'}));
 
export default userRouter;