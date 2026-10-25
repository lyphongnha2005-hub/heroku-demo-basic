const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Heroku Demo</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 760px; margin: 60px auto; padding: 0 20px; line-height: 1.6; }
          .card { border: 1px solid #ddd; border-radius: 14px; padding: 28px; box-shadow: 0 8px 24px rgba(0,0,0,.08); }
          h1 { margin-top: 0; }
          code { background: #f4f4f4; padding: 2px 6px; border-radius: 6px; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>Heroku Demo - Deployment Successful!</h1>
          <p>FPT University: Hello server is running.</p>
          <p>This Node.js + Express app is running on port <code>${PORT}</code>.</p>
          <p>Try <a href="/health">/health</a> to test the health-check route.</p>
        </div>
      </body>
    </html>
  `);
});

app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Server is healthy',
    timestamp: new Date().toISOString()
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
