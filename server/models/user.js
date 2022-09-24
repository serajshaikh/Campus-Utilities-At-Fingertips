import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    name:{type:String,require:true},
    regnumber:{type:String,require:true},
    password:{type:String,require:true},
    id:{type:String},
    createdAt:{
        type:Date,
        default:new Date()
    }
});

export default mongoose.model("User",userSchema);