const express = require('express');
const app = express();
app.use(express.static('PUBLIC'));

//Enforce HTTPS
app.use((req, res, next) => {
	if (req.headers['x-forwarded-proto'] === 'http')
		res.redirect(`https://private.garrettspage.com/` + req.url)
});

app.listen(8443, () => {
	console.log('Server started');
});