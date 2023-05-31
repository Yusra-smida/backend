const Categorie=require('../models/categorieModel')

const categroieCtrl={

    AjouterCat:async(req,res)=>{
        try {
            const {type_cat}=req.body
            const categorie= await Categorie.findOne({type_cat})
            if (categorie) return res.status(400).json({msg:'categorie existe'})
            const newCategorie= new Categorie({type_cat})
            await newCategorie.save()
            res.json({msg:'categorie created',result:newCategorie})
        } catch (error) {
            return res.status(500).json({msg:error.message})
            
        }
    },
    getAllCategorie:async(req,res)=>{
        try {
            const categories= await Categorie.find()
            res.json(categories)
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getCategorieBYId:async(req,res)=>{
        try {
            const id=req.params.id

            const categorie= await Categorie.findById(id)
            if(!categorie) return res.status(400).json({msg:"categorie n'existe pas"})
            res.json(categorie)
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    deletCategorie:async(req,res)=>{
        
        try {
            const id=req.params.id
            const categorie=await Categorie.findById(id)
            if (!categorie) return res.status(400).json({msg:"categorie n'existe pas"})
            await Categorie.findOneAndDelete({_id:id})
            return res.status(200).json({msg:'Categorie deleted'})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    modifierCategorie:async(req,res)=>{

        try {
            const {type_cat}=req.body
            
           const categorieupdate= await Categorie.findOneAndUpdate({_id:req.params.id}, {type_cat})
            
                        res.json({msg:'update a categorie',result:categorieupdate})
        } catch (error) {
            return  res.status(500).json({msg:error.message})
        }
        },
}
module.exports=categroieCtrl