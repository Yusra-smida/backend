const mongoose =require('mongoose');


const materielSchema=mongoose.Schema({

    code_materiel:{
        type:String,
        unique:true,
        trim:true,
        required:true

    },
    designation:{
        type:String,
        required:true,
    },
    categorie:{
        
            type: mongoose.Schema.Types.ObjectId,
            ref: "categories",
      
    },
    uls:{
        type:String
    },
    type:{
        type:String
    },


},{
    timestamps:true
})

module.exports=mongoose.model('materiels',materielSchema)