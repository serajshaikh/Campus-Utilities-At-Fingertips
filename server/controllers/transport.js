import mongoose from 'mongoose';
import Transport from '../models/transport.js';


export const getTransport = async(req,res) => {
    try {
        const postTransport = await Transport.find();

        res.status(200).json(postTransport);
    } catch (error) {
        res.status(404).json({message:error.message});
    }
}


export const createTransport = async(req,res) => {
    const post = req.body;
    console.log(post);
    const newPost = new Transport({...post,createdAt:new Date().toISOString()});
    try {
        await newPost.save();
        
        res.status(201).json(newPost);

    } catch (error) {
        res.status(409).json({message:error.message});
    }
}