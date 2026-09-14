import mongoose from 'mongoose';
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'User Name is required'],
        trim:true,
        minLength:2,
        maxLength:60,
    },
    email:{
        type:String,
        required:[true,'Email is required'],
        unique:true,
        trim:true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'please fill a valid email address'],
    },
    password:{
        type:String,
        required:[true,'User password is required'],
        minLength:5,
    }
},{timestamps:true});

const User= mongoose.model('User',userSchema);
export default User;
