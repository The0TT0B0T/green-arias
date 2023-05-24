const http = require('http');
const port = 3000;
const fs = require('fs');
const qs = require('querystring');
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);

const server = http.createServer(function(req, res) {
  if (req.method === 'GET') {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', function(error, data) {
      if (error) {
        res.writeHead(404)
        res.write('Error: File Not Found')
      } else {
        res.write(data)
      }
      res.end()
    });
  } else if (req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const formData = qs.parse(body);
      const name = formData.name;
      const phone = formData.phone;
      const address = formData.address;
      const date = formData.date;
      const time = formData.time;
      const message = `Thank you for your interest. We have received your information. Name: ${name}, Phone: ${phone}, Address: ${address}, Best Day: ${date}, Best Time: ${time}.`;
      client.messages
        .create({
          body: message,
          from: 'your_twilio_number',
          to: phone
        })
        .then(message => console.log(message.sid))
        .catch(error => console.log(error));
      res.writeHead(302, { 'Location': '/thank-you.html' });
      res.end();
    });
  }
});

server.listen(port, function(error) {
  if (error) {
    console.log('Something went wrong', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
});