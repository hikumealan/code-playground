const express = require('express');
const app = express();

// Serve the web app on the `/` route.
app.use('/', express.static('dist'));

// Serve the API on the `/api` route.
app.use('/api', (req, res) => {
  // Check if the user is authenticated.
  if (!req.session.user) {
    // Redirect the user to the login page.
    res.redirect('/login');
    return;
  }

  // Do something with the request and response.
});

// Configure security.
app.use(express.session({
  secret: 'my-secret',
  resave: true,
  saveUninitialized: true,
}));

// Start the server.
app.listen(3000, () => {
  console.log('App listening on port 3000');
});

/*
This code will create an Express app that serves the web app on the / route and the API on the /api route. The web app will be served from the dist directory, and the API will be served from the current directory.

The use() method is used to register a middleware function with the Express app. The middleware function is called for each request that matches the route that it is registered with.

The session() middleware function is used to enable session management in the Express app. The secret property is used to generate a secret key that is used to encrypt the session data. The resave and saveUninitialized properties are used to control when the session data is saved.

The listen() method is used to start the Express app listening on the specified port.
*/
