const router=require('express').Router()
const materielCtrl = require('../controlles/materielCtrl');

const auth=require('../middleware/auth');
const authAdmin=require('../middleware/authadmin')

router.get('/materiel',materielCtrl.getMaterials);
router.get('/materiel/:id',materielCtrl.getMateriel_ById)
router.post('/matereil',materielCtrl.Ajouter)
router.delete('/matereil/:id',materielCtrl.deleteMateriel)   
router.put('/materiel/:id',materielCtrl.modifiermateriel)
module.exports=router