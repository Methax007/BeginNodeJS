// const chalk = require('chalk');
const express = require('express');
const debug = require('debug')('app');
const morgan = require('morgan');

const app = express();
const PORT = 3000;


app.use(morgan('combined'));

app.get('/', (req, res) => {
res.send("GET Request Called")
})

app.listen(PORT, function(err){
	if (err) console.log(err);
	debug("Server listening on PORT", PORT);
});
