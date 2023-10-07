const route = require("express").Router();
const CSVUPLOAD = require('../controller/upload.csv.controller')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

route.post('/upload_csv',upload.single('csvFile'), CSVUPLOAD.uploadCsv)
route.get('/list', CSVUPLOAD.listUploadedCsvFiles);


// ejs 

route.get('/home', CSVUPLOAD.getHomePage);

module.exports =route