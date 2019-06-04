const mongoose=require('mongoose');
var Products=mongoose.model('Products',{
    name:{type:String},
    price:{type:String}
});
module.exports={
    Products};