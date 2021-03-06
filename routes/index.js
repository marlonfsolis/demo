const express = require('express');
const router = express.Router();

const Response = require('../shared/response');
const Error = require('../shared/error');

/* GET home page. */
router.get('/', function(req, res, next) {
  // warning
  const response = new Response({
    code: 200,
    err: new Error('Ok response')
  })

  res.render('index', { title: 'Express' });
});

module.exports = router;
