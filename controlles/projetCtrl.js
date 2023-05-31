const projets=require('../models/projetModel')
const mongoose=require('mongoose')
const projetsCtrl={
        creeProjet:async(req,res)=>{
            try {
                const {titre_projet,description_projet,data_debut_projet,
                                    data_fin_projet,etat_projet,equipe,tache}=req.body
                const projet=await projets.findOne({titre_projet});
                if (projet) return res.status(400).json({msg:'projet already exists'})
                    if (equipe.length===0) res.status(400).json({msg:'equipe is not empty'})
                const newProjet=new projets({titre_projet,description_projet,data_debut_projet,
                    data_fin_projet,etat_projet,equipe,tache});

                    await newProjet.save()
                    res.json({msg:'Created a projet', result:newProjet})

            } catch (error) {
                return res.status(500).json({msg:error.message})
            }
        },
    getProjets:async(req,res)=>{
        try {
            const projet=await projets.find().populate("equipe",'nom_equipe').populate("tache").exec();
            res.json(projet)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },
    getAllProjet:async(req,res)=>{
        try {
            const projet=await projets.find().populate("equipe",'nom_equipe').populate("tache","titre");
            res.json(projet)
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    deletProjet:async(req,res)=>{
        
        try {
            const id=req.params.id
            const projet=await projets.findById(id)
            if (!projet) return res.status(400).json({msg:'projetc does not exist'})
            await projets.findOneAndDelete({_id:id})
            return res.status(200).json({msg:'project deleted'})
            
        } catch (error) {
            return res.status(500).json({msg:error.message})
        }
    },

    modifierProjet:async(req,res)=>{

        try {
            const {titre_projet,description_projet,data_debut_projet,
                data_fin_projet,etat_projet,equipe,tache}=req.body
            
           const projetupdate= await projets.findOneAndUpdate({_id:req.params.id},
            {titre_projet,description_projet,data_debut_projet,
                data_fin_projet,etat_projet,equipe,tache})
            
                        res.json({msg:'update a project',result:projetupdate})
        } catch (error) {
            return  res.status(500).json({msg:error.message})
        }
        },

        getProjetById:async(req,res)=>{
            try {
                const id=req.params.id
                const projet=await projets.findById(id).populate("equipe",'nom_equipe').populate("tache").exec();
                if (!projet) return res.status(400).json({msg:'projet does not exist'})
               
                res.json( projet)
            } catch (err) {
                return res.status(500).json({msg:err.message})
            }
        },


        filtreprojet:async(req,res)=>{
            try {
              
               const {equipes}=req.body
          
                        
                const projet=await projets.find({equipes})
             
                res.json( projet)
               
            } catch (error) {
                return res.status(500).json({msg:error.message}) 
            }
        }

}
module.exports=projetsCtrl