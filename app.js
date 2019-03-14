// Express server
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// MongoDB
const mongoose = require('mongoose');

// .env configuration
require('dotenv').config();

// Constants
const port = process.env.PORT || 8000;
const development = process.env.NODE_ENV !== 'production';
const ROOT_URL = development ? `http://localhost:${port}` : process.env.DEPLOY_URL;
const MONGO_URL = development ? process.env.LOCAL_MONGO_URL : process.env.MLAB_URL;

const option = {
	useNewUrlParser: true
};

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

mongoose.connect(MONGO_URL, option).then(
	() 	=> { console.log('DB connection established!'); },
	err => { console.log('DB connection failed. Error: ', err); }
);

if (!development) {
	// Serve any static files
	app.use(express.static(path.join(__dirname, 'client/build')));
	// Handle React routing, return all requests to React app
	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
	});
}

app.listen(port, () => console.log(`> Ready on ${ROOT_URL}`));