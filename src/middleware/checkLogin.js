exports.ycLogin= (req,res,next)=>{
    if(req.session.userLogin){
        next();
    }
    else {
        return res.redirect('/');
    }
}

exports.khongycLogin= (req,res,next)=>{
    if(!req.session.userLogin){
         
        next();
    } else{res.send("<meta><h1>Bạn đã đăng nhập rồi</h1></meta>")};  
}
exports.logout= (req,res,next)=>{
    if(req.session.userLogin){         
        next();
    }   else{
        res.send("<meta><h1>Bạn chưa đăng nhập </h1></meta>");
    }
}