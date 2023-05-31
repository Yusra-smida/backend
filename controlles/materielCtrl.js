const materiels=require('../models/materielModel');

const materielCtrl={

    Ajouter:async(req,res)=>{
        try {
            const {code_materiel, designation,categorie,uls,type}=req.body
           

            const materiel=await materiels.findOne({code_materiel});
            if(materiel) return res.status(400).json({msg:'Materiel already exists'})

            const newMateriel=new materiels({code_materiel, designation,categorie,uls,type})
            await newMateriel.save()
            res.json({msg:'Created a materiel', result:newMateriel})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getMaterials:async(req,res)=>{
            try {
                const materiel=await materiels.find().populate('categorie','type_cat').exec();
                return res.json({ result:materiel})

            } catch (error) {
                return res.status(500).json({msg:error.message})
            }
        
    },

getMateriel_ById:async(req,res)=>{
    try {
        const id=req.params.id
        const matereil=await materiels.findById({_id:id}).populate('categorie','type_cat').exec()
        if(!matereil) return res.status(400).json({msg:'Materiel does not exist'})
        res.json({result:matereil})
    } catch (error) {
        return res.status(500).json({msg:error.message})
    }
},

    deleteMateriel:async(req,res)=>{
        try {
            await materiels.findByIdAndDelete(req.params.id)
            
            res.json({msg:"Deleted a materile "})
            
        } catch (err) {
                return res.status(500).json({msg:err.message})            
        }
    },
    modifiermateriel:async(req,res)=>{
        try {
            const {code_materiel, designation,categorie,uls,type}=req.body
         
            const materiel_update=await materiels.findByIdAndUpdate({_id:req.params.id},{code_materiel, designation,categorie,uls,type})
       
            res.json({result:materiel_update})
        } catch (error) {
            return res.status(500).json({msg:err.message})     
        }
    }

}
module.exports=materielCtrl