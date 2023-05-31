const Reservations=require('../models/reservationModel')


const ReservationCtrl={
        reserve:async(req,res)=>{
            try {
                const {chef,projet,materiel,unite,metre,date_reservation}=req.body
                const newReservation=new Reservations({chef,projet,materiel,unite,metre,date_reservation})
                await newReservation.save()
                res.json({result:newReservation})
            } catch (error) {
                return res.status(500).json({msg:error.message})   
            }
        },
    getAllRservation:async(req,res)=>{
        try {
            const reservations= await Reservations.find().populate('chef','nom').populate('projet','titre_projet').populate('materiel').exec()
            res.json({result:reservations})
        } catch (error) {
            return res.status(500).json({msg:error.message})   
        }
    },
    getReservationById:async(req,res)=>{
        try {
            const reservations= await Reservations.findById({_id:req.params.id}).populate('chef','nom').populate('projet','titre_projet').populate('materiel').exec()
            res.json({result:reservations})
        } catch (error) {
            return res.status(500).json({msg:error.message})   
        }
    },
   findeReservation:async(req,res)=>{
        try {
            const {chef_id}=req.body
            const reservation=await Reservations.findOne(req.body).populate('chef','nom').populate('projet','titre_projet').populate('materiel').exec()
            return res.json({ result:reservation})
        } catch (error) {
            return res.status(500).json({msg:error.message}) 
        }
    },

    modifierReservation:async(req,res)=>{
        try{
            const {confirmer}=req.body

            const reservationUpdate= await Reservations.findOneAndUpdate({_id:req.params.id},
                {confirmer})
                
                            res.json({msg:'update a reservation',result:reservationUpdate})
        }
        catch (error) {
            return res.status(500).json({msg:error.message}) 
        }
    }
    
}

module.exports=ReservationCtrl