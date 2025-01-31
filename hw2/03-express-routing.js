const express = require('express');
const app = express();
const port = process.env.PORT || 5001;

// http://localhost:5001/welcome should return a status code 200 with a welcome message of your choice in html format

// http://localhost:5001/redirect should redirect the request to '/redirected' by using 302 as the status code / the redirected page should return a redirected message of your choice

// http://localhost:5001/cache should return 'this resource was cached' in html format and set the cache max age to a day

// http://localhost:5001/cookie should return 'cookies… yummm' in plain text and set 'hello=world' as a cookie

// For other routes, such as http://localhost:5001/other, this exercise should return a status code 404 with '404 - page not found' in html format

/*
const routes = [
  'welcome',
  'redirect',
  'redirected',
  'cache',
  'cookie',
  'other',
];*/
app.get('/', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send(`
    <h1>Express Routing Exercise</h1>
    <ul>
      <li><a href="/welcome">Welcome</a></li>
      <li><a href="/redirect">Redirect</a></li>
      <li><a href="/cache">Cache</a></li>
      <li><a href="/cookie">Cookie</a></li>
      <li><a href="/other">404 Test</a></li>
    </ul>
  `);
});

//welcome 
app.get('/welcome', (req, res) => {
  res.status(200);
  res.set({'Content-Type': 'text/html'});
  res.send('<h1>Express Node Page! </h1>')
});

//redirect with 302
app.get('/redirect', (req, res) => {
  res.redirect(302, '/redirected');
});

//return message for redirection 
app.get('/redirected', (req, res) => {
  res.status(200);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>You have been successfully redirected! 🚀</h1>');
});

//cache
app.get('/cache', (req, res) => {
  res.status(200);
  res.set({
    'Content-Type': 'text/html',
    'Cache-Control': 'max-age=86400', // 1 day in seconds
  });
  res.send('<h1>This resource was cached 🗄️</h1>');
});

//cookie
app.get('/cookie', (req, res) => {
  res.status(200);
  res.set('Set-Cookie', 'hello=world');
  res.send('cookies... yummm 🍪');
});


// 404 handler for all other routes
app.use((req, res) => {
  res.status(404);
  res.set({ 'Content-Type': 'text/html' });
  res.send('<h1>404 - Page Not Found 🙈</h1>');
});



// Add your code here

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
