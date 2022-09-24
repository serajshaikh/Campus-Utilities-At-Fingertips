import mongoose from 'mongoose';
import Maintenance from '../models/maintenance.js';



export const getPosts = async(req,res) => {
    try {
        const postMaintenance = await Maintenance.find();

        res.status(200).json(postMaintenance);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost = async(req,res) => {
 const post = req.body;
 const newPost = new Maintenance({...post,creator:req.userId,createdAt:new Date().toISOString() });
 try {

     await newPost.save();

     res.status(201).json(newPost);


 } catch (error) {
     res.status(409).json({message:error.message});
 }

}
