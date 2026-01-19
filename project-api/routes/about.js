var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('About');
});

/* POST request to receive data from the front-end */
router.post('/', function (req, res, next) {
  console.log(req.body)
  const { speciesName, description, email } = req.body;  // Extract data from the request body

  console.log('Received data:', { speciesName, description, email });

  // Timestamp
  const timestamp = Date.now();

  // Create a dirPath
  const dirPath = path.join(__dirname, '../uploads', `${timestamp}`);
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }

  // fileContent
  const fileContent = `
    Species Name: ${speciesName}
    Description: ${description}
    Email: ${email}
  `;

  // Create a filePath
  const filePath = path.join(dirPath, 'info.txt');

  // Write the fileContent to the filePath
  fs.writeFileSync(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send({ message: 'Failed to save the data' });
    }

    res.status(200).send({
      message: 'Data received successfully',
      filePath: filePath,
    });
    console.log('Data saved successfully');
  });
});

module.exports = router;