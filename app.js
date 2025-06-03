const express = require('express');
const { exec } = require('child_process');
const app = express();

app.get('/ping', (req, res) => {
  const host = req.query.host;
  exec(`ping -c 1 ${host}`, (error, stdout, stderr) => {
    if (error) return res.send(`Error: ${stderr}`);
    res.send(`Output: ${stdout}`);
  });
});

app.listen(3000, () => {
  console.log('Command Injection App running on port 3000');
});
