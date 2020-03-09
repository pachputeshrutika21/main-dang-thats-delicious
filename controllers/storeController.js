const mongoose=require('mongoose');
const Store=mongoose.model('Store');
exports.homePage=(req,res)=>{
    console.log(req.name);
    res.render('index');
}
exports .addStore=(req,res)=>{
    res.render('editStore',{title:'Add Store'})
}
exports .createStore=async (req,res)=>{
    // console.log(req.body);
    // res.json(req.body);
    
    const store=new Store(req.body);
    await store.save();//.then(store=>{
    //     return Store.find()
    // })
    // .
    // then(stores=>{
    //     res.render('storeList',{stores:stores})
    // })
    //  console.log("it works!");
    res.redirect('/');
};
// exports.myMiddleware=(req,res,next)=>{
//     req.name='shrutika';
//     res.cookie('name','wes is cool',{age:21});
//     next();
//     }