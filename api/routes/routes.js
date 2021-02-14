'use strict';
module.exports = function(app) {
  var control = require('../controllers/controller');


  app.route('/transactions')
    .get(control.list_all_transactions)
    .post(control.create_a_transaction);


  app.route('/transactions/:transactionId')
    .get(control.read_a_transaction)
    .put(control.update_a_transaction)
    .delete(control.delete_a_transaction);
};