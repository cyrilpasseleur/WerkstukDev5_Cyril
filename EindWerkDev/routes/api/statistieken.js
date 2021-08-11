const express = require('express');
const router = express.Router();
const db = require('../../database');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "origin, X-Requested-With,content-type,accept");
    next();
})

router.get('/', function (req, res) {
    db.select().from('statistieken').then(function (data) {
        res.send(data);
        
    });
});

router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('statistieken').then(function(data){
        res.send(data);
    })
});

router.patch('/:id', function (req,res){
    db('statistieken').where({id: req.params.id}).update(req.body).returning('*').then(function(data){
        res.send(data);
    });
});

router.put('/:id', function (req,res){
    db('statistieken').where({id: req.params.id}).update({
        maandstappen: req.body.maandstappen || null,
        maandcalorieen: req.body.maandcalorieen || null,
        maandsporturen: req.body.maandsporturen || null
    }).returning('*').then(function(data){
        res.send(data);
    });
})

router.delete('/:id', function(req,res){
    db('statistieken').where({id: req.params.id}).del().then(function(){
        res.json({success: true});
    })
})

router.get('/:id', function(req,res){
    db('statistieken').where({id: req.params.id}).select().then(function(data){
        res.send(data);
    })
})

module.exports = router;