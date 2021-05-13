// - we use node server to both serve the dist to the
// frontend and also used alongside webpack-dev-middleware and webpack-hot-middleware
// to watch for file changes and serve them up on the fly

const express = require('express');
const app = express();
const port = 8080;

const webpack = require('webpack');
const config = require('./webpack.config.js');
const compiler = webpack(config);

const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

app.use(webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath,
	})
);

const hotMiddleware = webpackHotMiddleware(compiler);
app.use(hotMiddleware);

app.listen(port, () => {
	console.log(`Listening on port ${port} - go to http://localhost:8080 - if port 8080 is in use due to other projects running on 8080 please make sure to stop those`)
});
