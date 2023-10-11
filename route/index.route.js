const route = require("express").Router();
const CSVUPLOAD = require('../controller/upload.csv.controller')
const multer = require('multer');
const csvModel = require("../model/csv.model");
const upload = multer({ dest: 'uploads/' });

route.post('/upload_csv',upload.single('csvFile'), CSVUPLOAD.uploadCsv)
route.get('/list', CSVUPLOAD.listUploadedCsvFiles);
route.get('/csv/view/:id',CSVUPLOAD.getCsvById)


route.get('/csv/:id', (req, res) => {
    // Render the csv-data.ejs template and pass the ID as a parameter
    res.render('csvDataTable', { fileId: req.params.id });
});

// ejs 

route.get('/home', CSVUPLOAD.getHomePage);

module.exports =route