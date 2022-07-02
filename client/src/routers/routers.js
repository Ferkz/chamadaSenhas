const express = require('express');
const router = express.Router();

router.get('/index', async (req,res)=>{
    res.send('../views/index');
})

module.exports = router
