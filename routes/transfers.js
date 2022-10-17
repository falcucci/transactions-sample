'use strict';

const router = require('koa-router')({
  prefix: '/transfers'
});
const transfersController = require('./../controllers/transfers');

router.post('/', transfersController.add);

module.exports = router;
