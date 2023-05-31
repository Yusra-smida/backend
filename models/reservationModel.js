const mongoose=require('mongoose')

const ReservationSchema=new mongoose.Schema({
        chef:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users",
        },
        projet:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Projets",
        },
        materiel:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "materiels",
        },
      
        unite:{
            type:Number,
            default:0
        },
        metre:{
            type:Number,
            default:0
        },
        date_reservation:{
            type:String
        },
        confirmer:{
            type:String,
            default:'en_attente'
        }
})

module.exports=mongoose.model('reservation',ReservationSchema)