const express = require('express')
const studentData = require('./schema.js')
const mongoose = require('mongoose')

const router = new express.Router()

// USING ASYNC-AWAIT :-
router.post('/students',async (req,res)=>{
    try{
        const student = await new studentData(req.body).save()
        console.log(student)
        res.status(201).send(student)
    }
    catch(err){
        res.status(400).send(err.message)
    }
})


// GETTING WHOLE API
router.get('/students', async (req,res)=>{
    try{
        const studentsData = await studentData.find()
        res.status(200).send(studentsData)
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


// GETTING PARTICULAR DATA BY NAME
router.get('/students/:name', async (req,res)=>{
    try{
        let name = req.params.name
        const oneStudentData = await studentData.find({name:name})
        if(oneStudentData){
            res.status(200).send(oneStudentData)
        }
        else{
            res.status(400).send()
        }
    }
    catch(err){
        res.status(500).send(err.message)
    }
})


// UPDATE STUDENT DATA
router.patch('/students/:name', async (req,res)=>{
    try{
        let n = req.params.name
        const upData = await studentData.findOneAndUpdate({name:n},req.body,{new:true})
        if(upData){
            res.status(200).send(upData)
        }
        else{
            res.status(404).send()
        }
    }
    catch(err){
        res.status(400).send(err.message)
    }
})


// DELETE STUDENT DATA
router.delete('/students/:name', async (req,res)=>{
    try{
        let n = req.params.name
        const delData = await studentData.findOneAndDelete({name:n})
        if(delData){
            res.status(200).send(delData)
        }
        else{
            res.status(404).send()
        }
    }
    catch(err){
        res.status(400).send(err.message)
    }
})

module.exports = router