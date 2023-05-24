/* eslint-disable no-console */

const express = require('express');
const app = express();
app.disable("x-powered-by");


const open = require('open');
const port = '3201';


app.use(express.static('/'));
app.use('/', express.static('target/www/playbook/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
  open(`http://127.0.0.1:${port}`);
});
