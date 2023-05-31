const router= require('express').Router()
const ReservationCtrl=require('../controlles/reservationCtrl')

router.get('/reservation',ReservationCtrl.getAllRservation)
router.get('/reservation/:id',ReservationCtrl.getReservationById)
router.post('/reservation',ReservationCtrl.reserve)
router.post('/findereservation',ReservationCtrl.findeReservation)
router.put('/reservation/:id',ReservationCtrl.modifierReservation)
module.exports=router