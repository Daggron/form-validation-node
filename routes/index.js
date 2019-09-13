const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{

   
    res.render("index.ejs",{
        success:req.session.success,
        errors: req.session.errors,
    });
    req.session.errors = null;
    req.session.success = null;
   
});

router.post('/submit',(req,res)=>{

    console.log(req.body.email);
    req.check('email','Invalid Email Address').isEmail();
    req.check('password','Password do not match').equals(req.body.confirm)
    let errors = req.validationErrors();
    if(errors){
        req.session.errors = errors;
        req.session.success = false;
        console.log(errors);
    }
    else{
        req.session.success = true;
    }
    res.redirect('/');

});
module.exports = router;