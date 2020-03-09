const express = require('express');
const router = express.Router();
const storeController=require('../controllers/storeController');
const {catchErrors}=require('../handlers/errorHandlers');
// Do work here
// router.get('/', (req, res) => {
//   // console.log("hey!!!");
//   // res.send('Hey! It works!');
//   //const wes={name:'shrutika',age:20};
//   // res.json(wes);
//   // res.json(req.query.name);
//   // res.json(req.query);
//   res.render('hello',{name:'shrutika', dog:req.query.dog,title:"i love food"});
// });
// router.get('/reverse/:name',(req,res)=>{
//   const reverse=[...req.params.name].reverse().join('');
//   res.send(reverse);
// })

//controller
router.get('/',storeController.homePage);
router.get('/add',storeController.addStore);
router.post('/add',catchErrors(storeController.createStore));
module.exports = router;
