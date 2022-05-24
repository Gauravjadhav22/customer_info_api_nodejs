const router = require('express').Router()
const {getMember,createMember,updateMember,deleteMember}
=require('../controllers/member')

router.post('/',createMember)
router.get('/members/:member',getMember)
router.delete('/members/:member',deleteMember)
router.patch('/members/:member',updateMember)

module.exports=router;