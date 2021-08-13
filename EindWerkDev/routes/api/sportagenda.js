const express = require('express');
const router = express.Router();
const db = require('../../database');

//Cors policy error remover ;p
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', "origin, X-Requested-With,content-type,accept");
    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length,Server,Date,access-control-allow-methods,access-control-allow-origin");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS,PATCH");
    next();
})
//TABLE 1
//GET logs data from database
router.get('/', function (req, res) {
    res.status(200);
    db.select().from('sportagenda').then(function (data) {
        res.send(data);
    });
});

//POST logs data to database
router.post('/', function (req, res) {
    res.status(201);
    db.insert(req.body).returning('*').into('sportagenda').then(function(data){
        res.send(data);
    })
});

//PATCH logs data from database
router.patch('/:uuid_', function (req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).update(req.body).returning('*').then(function(data){
        res.send(data);
    });
});

//PUT logs data from database
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

//DELETE data from database
router.delete('/:uuid_', function(req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).del().then(function(){
        res.json({success: true});
    })
})

//GET data according of uuid from database
router.get('/:uuid_', function(req,res){
    db('sportagenda').where({uuid_: req.params.uuid_}).select().then(function(data){
        res.send(data);
    })
})
module.exports = router;