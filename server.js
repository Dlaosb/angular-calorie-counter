const express = require('express');
const path = require('path');

const app = express();

// app.use(express.static(path.join(__dirname, './')));
// app.use(express.static(path.join(__dirname, '/client/')));


// path.join (needs __dirname) versus path.resolve (doesn't need dirname)
// res.sendFile(pathname)
// res.sendFile(__dirname)


app.use((req, res) => {
  res.sendStatus(404);
});

app.get('/', (req, res) => {
	//res.sendFile(path.resolve('./client/index.html'));
	res.sendFile(path.join(__dirname + '/client/index.html'));
})
	


app.listen(3000);