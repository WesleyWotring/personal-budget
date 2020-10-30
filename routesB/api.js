const express = require('express');
const Budget = require('../schema/schema');
const router = express.Router();


const budget = require('../budget.json');

router.get('/budget', (req, res) => {
    Budget.find({}).then(function (budgets){
        res.send(budgets);
    });
});

router.post('/budget', function(req, res) {
    Budget.create(req.body).then(function(budget){
        res.send(budget);
    });
});
module.exports = router;