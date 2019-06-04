const express=require('express');
var router=express.Router();
var{Products}=require('../models/products');
var ObjectId=require('mongoose').Types.ObjectId;
router.get('/',(req,res)=>{
    Products.find((err,docs)=>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving Products:'+JSON.stringify(err,undefined,2));}

    });
});
router.get('/:id',(req,res)=>{
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send("No record with given id:${req.params.id}");
    Products.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);}
            else{console.log('Error in retreiving products:'+JSON.stringify(err,undefined,2));}
        });
    });





router.post('/',(req,res)=>{
    var pro=new Products({
        name:req.body.name,
        price:req.body.price,
       
    });
    pro.save((err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('error in employee save:'+JSON.stringify(err,undefined,2));}
    });
});
module.exports=router;