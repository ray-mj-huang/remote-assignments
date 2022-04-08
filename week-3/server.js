const express = require("express");

const myApp = express();

const path = require("path");


// 靜態網頁：sum.html

myApp.get('/sum.html', function (req, res) {
    res.sendFile(path.join(__dirname, 'sum.html'));
})


// 首頁

myApp.get('/', function (req, res) {
    res.send('<h1>Welcome</h1>');
})


myApp.get('/getData', function (req, res) {
    
    let input = req.query.number;
    let reply;


    // 判斷是否為正整數的函式

    function isPositiveInteger(a){ 

        if ( a == 0 ) {

            return false;

        } else {

            let reg = /^[0-9]+$/ ;
            return reg.test(a)
        }
    }


    if ( req.url == '/getData' || req.url == '/getData?number=' ) {

        // 判斷是否沒有填入任何東西

        reply = 'Lack of Parameter';

    } else if ( isPositiveInteger(input) === false ) { 
        
        // 判斷是否為正整數

        reply = 'Wrong Parameter';

    } else {

        input = Number(input);
        
        const answer = ( (1 + input) * input ) / 2;
        
        reply = answer;   

    }

    res.send(`${reply}`);

})


myApp.listen(3000);







