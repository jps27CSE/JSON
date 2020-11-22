var fs = require('fs');
var faker = require('faker');


var data= fs.readFileSync('fakerdata.json').toString();

var datas=JSON.parse(data);

console.log(datas);

datas.forEach(function(elem){
    console.log(elem.name,elem.email);
});