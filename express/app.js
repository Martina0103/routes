const express = require('express');
const router = require('./router')
const app = express();

// const router = express.Router();

// router.delete('/customers/:id', (req,res,next) => {
//     res.status(200).json('Deleted');
// })

app.use(router);
module.exports = app;

