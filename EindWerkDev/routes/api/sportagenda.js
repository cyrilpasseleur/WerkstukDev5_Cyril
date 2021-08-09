const express = require('express');
const router = express.Router();
const db = require('../../database');

router.get('/', function (req, res) {
    db.select().from('sportagenda').then(function (data) {
        res.send(data);
    });
});
router.post('/', function (req, res) {
 
    db.insert(req.body).returning('*').into('sportagenda').then(function(data){
        res.send(data);
    })
});

router.patch('/:id', function (req,res){
    db('sportagenda').where({id: req.params.id}).update(req.body).returning('*').then(function(data){
        res.send(data);
    });
});
router.put('/:id', function (req,res){
    db('sportagenda').where({id: req.params.id}).update({
        date: req.body.date || null,
        stappen: req.body.stappen || null,
        calorieen: req.body.calorieen || null,
        sporturen: req.body.sporturen || null
    }).returning('*').then(function(data){
        res.send(data);
    });
})
module.exports = router;