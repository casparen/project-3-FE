var express     = require('express');
var cors        = require('cors');
var bodyParser  = require('body-parser');
var request     = require('request');
var md5         = require('md5');
var app         = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var FAVORITES_COLLECTION = 'favorites';

app.get('/sample', function(req, res){
  res.json("hello world");

    // try {
    //   db.collection(FAVORITES_COLLECTION).remove( { id:   myArtId }) ;
    //     } catch (e) {
    //       print (e);
    //       };
});


var server = app.listen(process.env.PORT || 8000, function () {
  var port = server.address().port;// db = database;
    console.log("App now running on port", port);
  });
// });

  function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({"error": message});
  };
