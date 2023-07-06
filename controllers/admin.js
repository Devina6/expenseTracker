const path = require('path');
const rootDir = require('../util/path');
const Expense = require('../models/expense');

exports.addExpense = async(req,res,next) => {
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    const data = Expense.create({
        amount:amount,
        description:description,
        category:category
    }).then(result => {
        res.json(result);
    })
   
     
}

exports.getExpenses = async (req,res,next) =>{
    Expense.findAll()
        .then(expenses => {
            console.log(expenses);
            res.json(expenses);
        })
        .catch(err => console.log(err))
}

exports.deleteExpense = (req,res,next) => {
    const id = req.params.id;
    Expense.findByPk(id)
        .then(expense =>{
            if(!expense){
                console.log("expense not found")
            }else{
                return expense.destroy();
            }
        })
        .then(result => {
            console.log("expense deleted");
            res.redirect('/');
        })
        .catch(err => console.log(err))
}
