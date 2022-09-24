import mongoose from 'mongoose';
import Payment from '../models/payment.js';



export const getPayment = async(req,res) => {
    try {
        const postPayment = await Payment.find();

        res.status(200).json(postPayment);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPayment = async(req,res) => {
 const post = req.body;
 const newPost = new Payment({...post,creator:req.userId,createdAt:new Date().toISOString() });
 try {

     await newPost.save();

     res.status(201).json(newPost);


 } catch (error) {
     res.status(409).json({message:error.message});
 }

}
