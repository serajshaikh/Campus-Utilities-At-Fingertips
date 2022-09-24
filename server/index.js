import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import userRoutes from './routes/users.js';
import maintenanceRoutes from './routes/maintenance.js';
import transportRoutes from './routes/transport.js';
import paymentRoutes from './routes/payment.js';


const app = express();

dotenv.config();

app.use(bodyParser.json({ limit:"30mb" , extended:true }));  //middelware function
app.use(bodyParser.urlencoded({ limit:"30mb" , extended:true }));

app.use(cors());

app.use('/user',userRoutes);
app.use('/maintenance',maintenanceRoutes);
app.use('/transport',transportRoutes);
app.use('/payment',paymentRoutes);

/*app.get('/',(req,res)=>{
    res.send("Campus Utility At Finger Tips");
})*/


const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
})
.then(()=>app.listen(PORT,() => console.log(`Server Running in PORT:${5000}`)))
.catch((error)=>console.log(error.message));

mongoose.set('useFindAndModify',false);

