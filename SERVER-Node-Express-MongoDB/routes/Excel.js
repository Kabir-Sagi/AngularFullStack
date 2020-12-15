var express = require('express');
var app = express()
var upload = require('express-fileupload')
var router = express.Router();
var mongo = require('mongodb')
var MpngoClient = mongo.MongoClient
var xlsxfile = require('xlsx')
var URL = 'mongodb://localhost:27017/filedatabase'





router.post('/file', function(req, res, next) {
  // app.use(upload({
  //   createParentPath: true
  // }))
  
  console.log("Request came")
  console.log(req.files.efile.name)
  
  var excelFileName = req.files.efile
  console.log(req.files.efile.data)
  // req.files.efile.mv('./'+excelFileName,function(err){
  //     if(err){
  //       res.send(err)
  //     }
  //     else{
  //       res.send("File uploaded")
  //     }
  // });

  var wb =xlsxfile.readFile(req.files.efile.name)
  console.log(wb.SheetNames)
 var ws = wb.Sheets['Sheet1']
 console.log(ws)
   var data = xlsxfile.utils.sheet_to_json(ws)
   console.log(data)
   //Database connection 
   MongoClient.connect(URL, function(err, db) {
    if (err) return
  
    var collection = db.collection('ExcelData')
     forEach((elem) => {
       collection.insert(elem,function(err){
         if(err){res.send(err)}
       })
     })
        db.close() 
       
  })


});

router.get('/getData',function(req,res){
  MongoClient.connect(URL, function(err, db) {
    if (err) return
  
    var collection = db.collection('ExcelData')
    collection.find({}).toArray(function(err, docs) {
      if (err){
        res.send(err)
      }
      else {
      res.send(docs)
      }
      db.close() 
    })
  
})
})

module.exports = router;
