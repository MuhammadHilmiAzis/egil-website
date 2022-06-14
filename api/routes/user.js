exports.signup = function(req, res){
    message = '';

    if(req.method == "POST") {

      var post      = req.body;
      var username  = post.username;
      var email     = post.email;
      var password  = post.pass;
 
       var sql = "INSERT INTO `users`(`username`,`email`,`password`) VALUES ('" + username + "','" + email + "','" + password + "')";
 
       var query = db.query(sql, function(err, result) {
 
          message = "Succesfully! Your account has been created.";
          res.render('index.ejs',{message: message});
       });
 
    } 
 };