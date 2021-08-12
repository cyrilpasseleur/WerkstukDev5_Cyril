const express = require('express');
const router = express.Router();
const db = require('../../database');

router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "origin, X-Requested-With,content-type,accept");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    next();
})

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

router.patch('/:uuid_', function (req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).update(req.body).returning('*').then(function(data){
        res.send(data);
    });
});

router.put('/:uuid_', function (req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).update({
        date: req.body.date || null,
        stappen: req.body.stappen || null,
        calorieen: req.body.calorieen || null,
        sporturen: req.body.sporturen || null
    }).returning('*').then(function(data){
        res.send(data);
    });
})

router.delete('/:uuid_', function(req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).del().then(function(){
        res.json({success: true});
    })
})

router.get('/:uuid_', function(req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).select().then(function(data){
        res.send(data);
    })
})

module.exports = router;