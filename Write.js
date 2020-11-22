var fs = require('fs');
var faker = require('faker');

var data= [];

for (var i=0; i<10; i++)
{
    var people = {};

    people.name=faker.name.findName();
    people.email=faker.internet.email();
    people.address=
    {
        city: faker.address.city(),
        country: faker.address.country(),
        lat: faker.address.latitude(),
    };

    data.push(people);
}

fs.writeFile('fakerdata.json',JSON.stringify(data), function(err,data){
    console.log("file wrtie successfully")
});

