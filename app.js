const express = require('express')
const app = express()
const port = 3000

//import express from 'express';
import { get_transactions,new_transaction,get_transaction } from './transaction';

const ap = express();

app.get('/get-transactions', (req, res) => {
  res.json(get_transactions());
});
app.get('/get-transaction/:id', (req, res) => {
    res.json(get_transaction(req.params.id));
  });

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});