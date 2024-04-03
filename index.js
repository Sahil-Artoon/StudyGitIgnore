const express = require('express');
const multer  = require('multer');

const app = express();
const upload = multer({ dest: 'uploads/' }); // specify the destination folder for uploaded files

// Define a route to handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // req.file contains information about the uploaded file
  console.log(req.file)
//   res.json({ filename: req.file.filename });
  res.json({ filename: req.file.originalname });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});