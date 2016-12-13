var express = require('express');
var cors = require('cors');
var app = express();
var xmlparser = require('express-xml-bodyparser');
//app.use(cors());
//app.options('*', cors());

/*
app.use(function (req, res, next) {

    req.setRequestHeader('Access-Control-Allow-Origin', '*')
    // Website you wish to allow to connect
    //res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    req.setRequestHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    req.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    req.setRequestHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
*/

app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session      = require('express-session');
//var ebay = require('ebay-api');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: process.env.SESSION_SECRET  || "secret" }));

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));
var passport = require('passport');
app.use(passport.initialize());
app.use(passport.session());



//require("./assignment/app.js")(app);
require("./ReWear/app.js")(app);

//var ipaddress = process.env.OPENSHIFT_NODEJS_IP;
//var port      = process.env.OPENSHIFT_NODEJS_PORT || 3000;

app.set('ipaddress', (process.env.IP));
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), app.get('ipaddress'));

//app.listen(port, ipaddress);
