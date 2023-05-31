const mongoose=require('mongoose')

const CategorieSchema=new mongoose.Schema({
    type_cat:{
        type:String,
        unique:true,
        required:true
    }
})
module.exports=mongoose.model('categories',CategorieSchema)