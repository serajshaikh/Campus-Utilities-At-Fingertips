import mongoose from 'mongoose';

const transportSchema = mongoose.Schema({
name:{type:String,require:true},
regnumber:{type:String,require:true},
hireaddress:{
    type:String,
    default:'Bus Service'
},
address:{type:String,require:true},
createdAt:{
    type:Date,
    default:new Date()
}
});

const Transport = mongoose.model('transport',transportSchema);

export default Transport;