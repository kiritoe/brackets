var Sighting = require('../models/Sighting.js');

module.exports = {
    read: function(req, res) {
        Sighting.find(req.query)
        .exec(function(err, result) {
            if (err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    create: function(req, res) {
        console.log(req.body)
        var newSighting = new Sighting(req.body);
        newSighting.save(function(err, result) {
            if(err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    update: function(req, res) {
        Sighting.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
            if(err) return res.status(500).send(err);
            else res.send(result);
        });
    },
    
    delete: function(req, res) {
        Sighting.findByIdAndRemove(req.params.id, function(err, result) {
            if(err) return res.status(500).send(err);
            else res.send(result);
        });
    }
    
    
};