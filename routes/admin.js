const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/',adminController.getExpenses);
router.post('/add-expense',adminController.addExpense);
router.get('/delete/:id',adminController.deleteExpense);

module.exports = router;
