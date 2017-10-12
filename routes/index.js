const express = require('express');
const doggoRetriever = require('../public/javascripts/doggo_retriever.js');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'DOGGO',
    doggoTags: doggoRetriever.getDoggos()
  });

});

module.exports = router;
