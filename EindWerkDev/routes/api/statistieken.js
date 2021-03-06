const express = require('express');
const router = express.Router();
const db = require('../../database');

//cors policy remover ;p
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "origin, X-Requested-With,content-type,accept");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    next();
})
//TABLEE 2
//GET Categories from database
router.get('/', function (req, res) {
    db.select().from('statistieken').then(function (data) {
        res.send(data);
        
    });
});
//POST category to database
router.post('/', function (req, res) {
    db.insert(req.body).returning('*').into('statistieken').then(function(data){
        res.send(data);
    })
});

//PATCH category to database
router.patch('/:uuid_', function (req,res){
    db('statistieken').where({uuid_: req.params.uuid_}).update(req.body).returning('*').then(function(data){
        res.send(data);
    });
});
//PUT category to database
router.put('/:uuid_', function (req,res){
    db('statistieken').where({uuid_: req.params.uuid_}).update({
        maandstappen: req.body.maandstappen || null,
        maandcalorieen: req.body.maandcalorieen || null,
        maandsporturen: req.body.maandsporturen || null
    }).returning('*').then(function(data){
        res.send(data);
    });
})
//DELETE category from database
router.delete('/:uuid_', function(req,res){
    db('statistieken').where({uuid_: req.params.uuid_}).del().then(function(){
        res.json({success: true});
    })
})
//GEt category according to uuid from database
router.get('/:uuid_', function(req,res){
    db('statistieken').where({uuid_: req.params.uuid_}).select().then(function(data){
        res.send(data);
    })
})

module.exports = router;