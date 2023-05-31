const router=require('express').Router()

const categroieCtrl=require('../controlles/categroieCtrl')

router.get('/categorie',categroieCtrl.getAllCategorie)
router.get('/categorie/:id',categroieCtrl.getCategorieBYId)
router.post('/categorie',categroieCtrl.AjouterCat)
router.delete('/categorie/:id',categroieCtrl.deletCategorie)
router.put('/categorie/:id',categroieCtrl.modifierCategorie)

module.exports=router