//what is middleware?
//It is a function or modules that have to handle and access http requests('req') 
//and http reponses('res') of an object and next('next')function is used to pass the control next middleware.

//there are three type of middleware.
//i)application-level middleware-They are typically defined using app.use() or similar methods.
// Application-level middleware is often used for tasks like logging, parsing request bodies, setting headers, and more.

//ii)route-level middleware-They are defined similar to application-level middleware but are applied to specific routes using the router.use() or similar methods. 
//Router-level middleware is useful for tasks like route-specific authentication or data validation.

//iii)errorhandling middleware-They are defined with four parameters (err, req, res, next) and are typically placed at the end of the middleware chain. 
//When an error occurs in any previous middleware or route handler, the error handling middleware is called to handle the error gracefully.
// app.js

const express = require("express");
const app = express();

const reqPasser=(reqobject,resobject,next)=>{
    if(!reqobject.query.age){
        resobject.send("Please provide age");
    }
    else if(reqobject.query.age<18)
    {
        resobject.send("You can't access this page");
    }
    else{
        next();
    }
   
}

app.get('/usage',reqPasser,(req,res)=>{
    res.send("I will work at IT company");
});

app.get('/home',(req,res)=>{
   res.send("I want go to eastern ghats.");
});

app.listen(3000,()=>{
    console.log("listening to port 3000");
});

