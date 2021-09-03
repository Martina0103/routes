const router = require('express').Router();

router.delete('/customers/:id', (req,res,next) => {
    res.status(200).json(req.params.id);
})

module.exports = router;