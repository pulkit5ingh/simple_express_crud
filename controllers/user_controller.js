const express = require("express");

const UserModel = require("../models/user_model");

const getAllUser = async (req, res) => {
   

    const list = await UserModel.find({});

    res.json({
        "status": 200,
        "message": "User data list",
        "data": list,       
    });
}

const getUserById = async (req, res) => {

    

    try {
        const { id } = req.params;

    const user = await UserModel.findById({_id: id});

    res.json({
        "status": 200,
        "message": "User data",
        "data": user,       
    });
    } catch (error) {
        res.json({
            "status": 404,
            "message": "Something went wrong",
        });
    }
}



const createUser = async (req, res)  =>  {

    const { name, email } = req.body;

   const createdUser = await UserModel.create({
        "name": name,
        "email": email,
    });


    res.json({
        "message": "Create user working",
        "status": 200,
        "user": createdUser,
    })
}

const deleteUser = async (req, res)  =>  {

    const { id } = req.params;

   const createdUser = await UserModel.deleteOne({_id: id});


    res.json({
        "message": "Deleted user working",
        "status": 200,
        "data": createdUser,
    })
}

const replaceUser = async (req, res) => {
    const { id } = req.params;

   const result = await UserModel.replaceOne({_id: id}, req.body);
   res.json({
    "message": "Replace user working",
    "status": 200,
    "data": result,
   });

    

}

const updateUser = async (req, res) => {
    const { id } = req.params;

   const result = await UserModel.findByIdAndUpdate({_id: id}, req.body, {new: true});
   res.json({
    "message": "Update user working",
    "status": 200,
    "data": result,
   });    

}

module.exports = { getAllUser, getUserById, createUser, deleteUser, replaceUser, updateUser, };