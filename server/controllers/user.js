import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import UserModel from '../models/user.js';

const secret = 'campus';

export const signin = async(req,res) => {
   const { regnumber, password } = req.body;
    
   try {
       const oldUser = await UserModel.findOne({regnumber});
       if(!oldUser) return res.status(404).json({ message:"User doesn't exist" });
       const isPasswordCorrect = await bcrypt.compare(password,oldUser.password);
       if(!isPasswordCorrect) return res.status(400).json({message:"Invalid passsword"});

       const token = jwt.sign({regnumber:oldUser.regnumber,id:oldUser._id},secret,{expiresIn:"5h"});

       res.status(200).json({ result:oldUser,token });
   } catch (error) {
       res.status(500).json({message: "Somethingh is wrong" });
   }
};

export const signup = async(req,res) => {
    const { username,regnumber,password } = req.body;

    try {
        const oldUser = await UserModel.findOne({regnumber});

        if(oldUser) return res.status(400).json({ message:"User already exist" }); 

        const hashedPassword = await bcrypt.hash(password,12);

        const result = await UserModel.create({ regnumber,password:hashedPassword,name:username });
        
        const token = jwt.sign({ regnumber:result.regnumber, id:result._id },secret,{ expiresIn:"5h"});

        res.status(201).json({ result,token });
    } catch (error) {
        res.status(500).json({message:"Something went wrong"});
       
        console.log(error);
    }
};


