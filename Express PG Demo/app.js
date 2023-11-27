const express = require('express');
const morgan = require('morgan');
const app = express();
const ExpressError = require('./error');

app.use(express.json());
app.use(morgan('dev'));

const uRoutes = require('./users');

app.use('/users', uRoutes);

app.use(function(req,res,next){
    return new ExpressError("Not Found", 404);
});

app.use((err,req,res,next)=>{
    let status = err.status || 500;
    return res.status(status).json({
        error: {
            message: err.message,
            status: status
        }
    })
})

module.exports = app;

