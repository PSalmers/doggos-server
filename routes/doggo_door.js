const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

/* POST users listing. */
router.post('/', function(req, res, next) {
  let pathName = path.resolve(__dirname + '/../public/images/' + req.body.imageName);
  let arrayOfBytes = req.body.imageFile;
  let buffer = new Buffer(arrayOfBytes);
  fs.writeFileSync(pathName, buffer);
});

module.exports = router;
