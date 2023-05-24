/* eslint-disable no-console */

const express = require('express');
const app = express();
app.disable("x-powered-by");
const port = '3301';

app.use(express.static('/'));
app.use('/playbook', express.static('target/www/playbook/'));
app.use('/', express.static('target/www/'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
