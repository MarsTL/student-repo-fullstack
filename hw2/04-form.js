const port = process.env.PORT || 5001;

// http://localhost:5001/form should return a form with input elements for username, email, and submit button

// http://localhost:5001/submit should return all the data the user entered

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send(`<h1>Welcome!</h1><p>Go to <a href="/form">/form</a> to submit a form.</p>`);
});


//form
app.get('/form', (req, res) => {
    res.send(`
        <form action="/submit" method="POST">
            <label for="username">Name:</label>
            <input type="text" id="username" name="username" required><br><br>
            
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required><br><br>
            
            <label for="comments">Comments:</label>
            <textarea id="comments" name="comments"></textarea><br><br>
            
            <label for="newsletter">Newsletter:</label>
            <select id="newsletter" name="newsletter">
                <option value="Yes, sign me up for the newsletter.">Yes</option>
                <option value="No, thank you.">No</option>
            </select><br><br>
            
            <button type="submit">Submit</button>
        </form>
    `);
});


//submission
app.post('/submit', (req, res) => {
  const { username, email, comments, newsletter } = req.body;
  res.send(`
      <h2>Form Submission</h2>
      <p><strong>Name:</strong> ${username}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Comments:</strong> ${comments || "n/a"}</p>
      <p><strong>Newsletter:</strong> ${newsletter}</p>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});