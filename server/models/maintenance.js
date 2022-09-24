import mongoose from 'mongoose';
 
const MaintenanceSchema = mongoose.Schema({
     buildname:{type:String,require:true},
     exactloc:{type:String,require:true},
     msg:{type:String,require:true},
     createdAt:{
        type:Date,
        default:new Date()
    }
 });

 const Maintenance = mongoose.model('maintenance',MaintenanceSchema);

 export default Maintenance;