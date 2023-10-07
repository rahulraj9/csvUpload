const route = require("express").Router();
const CSVUPLOAD = require('../controller/upload.csv.controller')
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

route.post('/upload_csv',upload.single('csvFile'), CSVUPLOAD.uploadCsv)

module.exports =route