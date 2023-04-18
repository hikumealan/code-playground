const express = require('express');
const app = express();

// Serve the web app on the `/` route.
app.use('/', express.static('dist'));

// Serve the API on the `/api` route.
app.use('/api', (req, res) => {
  // Check if the user is authenticated.
  if (!req.session.user) {
    res.redirect('/login');
    return;
  }

  // Do something with the request and response.
});

// Protect the `/login` route with basic authentication.
app.use('/login', (req, res, next) => {
  // Check if the user is already authenticated.
  if (req.session.user) {
    res.redirect('/');
    return;
  }

  // Require the user to provide a username and password.
  const { username, password } = req.body;
  if (!username || !password) {
    res.send('Please provide a username and password.');
    return;
  }

  // Check if the username and password are valid.
  const user = users.findOne({ username });
  if (!user || user.password !== password) {
    res.send('Invalid username or password.');
    return;
  }

  // Authenticate the user and redirect to the home page.
  req.session.user = user;
  res.redirect('/');
});

// Start the server.
app.listen(3000, () => {
  console.log('App listening on port 3000');
});

/*
This code will create an Express app that serves the web app on the / route and the API on the /api route. The web app will be served from the dist directory, and the API will be served from the current directory.

The use() method is used to register a middleware function with the Express app. The middleware function is called for each request that matches the route that it is registered with.

The listen() method is used to start the Express app listening on the specified port.

The code above uses basic authentication to protect the /login route. The user is required to provide a username and password in order to access the route. The username and password are then checked against the database to see if they are valid. If they are valid, the user is authenticated and redirected to the home page. If they are not valid, the user is sent an error message.

The code above can be used as a starting point for securing your Node.js web app. You can customize the code to fit your specific needs.
*/
