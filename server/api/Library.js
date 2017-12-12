const express = require('express');
const router = express.Router();

const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const Game = require('../../db/models/game');

router.get('/Library', function(req, res, next) {
  Game.findAll({
    where: {
      Name : {
        [Op.like]: 'twilight%'
      }
    }
  })
  .then(all => {
    console.log(all)
    res.send(all);
  })
});

module.exports = router;
