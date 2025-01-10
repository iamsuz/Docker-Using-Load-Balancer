const express = require('express');
const os = require('os');
const { generateRandomColor } = require("@iamsuz/color-kit");

const app = express();
console.log(generateRandomColor())

app.use('/', async (req, res) => {
    res.status(200).json({ message: 'You are at root API', hostname: os.hostname() })
})

app.listen(3000, () => console.log('Server is listening on port 3000'))