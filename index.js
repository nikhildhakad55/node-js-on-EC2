const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f0f8ff;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          padding: 20px;
          border: 2px solid #007acc;
          border-radius: 10px;
          background-color: #ffffff;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #007acc;
          font-size: 2rem;
          margin: 0;
        }
        p {
          color: #333333;
          font-size: 1rem;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to Node.js Application</h1>
        <p>Enjoy building your application!</p>
      </div>
    </body>
    </html>
  `;

  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);  // Fixed this line with backticks
});

