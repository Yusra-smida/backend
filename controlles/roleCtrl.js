const roles=require('../models/roleModel')

const roleCtrl={
Ajouter:async(req,res)=>{
    try {
        const {libelle}=req.body;
        const role=await roles.findOne({libelle});
        if(role) return res.status(400).json({msg:'role already exists'})

            const newRole=new roles({libelle});
            await newRole.save();
            return res.json({msg:'role created',result:newRole})
        
    } catch (error) {
        return res.status(500).json({msg:error.message})      
    }
},
getRols:async(req,res)=>{

    try {
        const role=await roles.find();
        let  tab = role.filter(item => item.libelle !=='admin' )
        return res.status(200).json(tab);
    } catch (error) {
        return res.status(500).json({msg:error.message})      
    }
},
deleteRole:async(req,res)=>{
   try {
    await roles.findByIdAndDelete(req.params.id)
            
    res.json({msg:"Deleted a role "})
    
   } catch (error) {
    return res.status(500).json({msg:error.message})      
   }
},
modifieRole:async(req,res)=>{
    try {
        const {libelle}=req.body;

        const role=await roles.findOne({libelle});
        if (role) return res.status(400).json({msg:'role alread existe'});
       
        
        const  roleUpdate=await roles.findOneAndUpdate({_id:req.params.id},{libelle:libelle})
   
        res.json({msg:'update a role',result:roleUpdate})

    } catch (error) {
        return res.status(500).json({msg:error.message})   
    }
},
getRoleById:async(req,res)=>{
    try {
        const id=req.params.id
        const role=await roles.findById(id)
        if (!role) return res.status(400).json({msg:'role does not exist'})
       
        res.json( role)
    } catch (err) {
        return res.status(500).json({msg:err.message})
    }
},



}
module.exports=roleCtrl