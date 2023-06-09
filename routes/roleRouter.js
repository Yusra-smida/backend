const roleCtrl=require('../controlles/roleCtrl');
const router=require('express').Router();

router.get('/roles',roleCtrl.getRols)
router.get('/role/:id',roleCtrl.getRoleById)

router.post('/role',roleCtrl.Ajouter)
router.delete('/role/:id',roleCtrl.deleteRole)
router.put('/role/:id',roleCtrl.modifieRole)
module.exports=router
