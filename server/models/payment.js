import mongoose from 'mongoose';
 
const PaymentSchema = mongoose.Schema({
    student:{type:String,require:true},
    regnum:{type:String,require:true},
    address:{type:String,require:true},
     createdAt:{
        type:Date,
        default:new Date()
    }
 });

 const Payment = mongoose.model('payment',PaymentSchema);

 export default Payment;