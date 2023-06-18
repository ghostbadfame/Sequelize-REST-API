const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = require('./app/config/db.config');
db.sequelize.sync();

const controller = require('./app/controllers/customer.controller')

app.get('/',(req,res)=> {
    res.send("Hello");
  })

app.post('/customers/new',(req,res)=> {
    controller.createCustomers(req,res);
})

app.get('/customers',(req,res)=> {
    controller.findAllCustomers(req,res);
})

app.get('/customers/:email',(req,res)=> {
    controller.findCustomerByEmail(req,res);
})

app.put('/customers/update',(req,res)=>{
    controller.updateCustomers(req,res);
})

app.delete('/customers/delete/:update',(req,res)=>{
    controller.deleteCustomer(req,res);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})