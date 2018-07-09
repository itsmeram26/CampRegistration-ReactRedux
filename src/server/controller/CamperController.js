const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const camperJSON = {
    'camper' : [{
        'cname' :'AAA',
        'gender':'Male',
        'address':'111, ABC',
        'city': 'Bridgewater',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'BBB',
        'gender':'Female',
        'address':'111, BBB',
        'city': 'New Port',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'CCC',
        'gender':'Male',
        'address':'111, CCC',
        'city': 'Huntersville',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'DDD',
        'gender':'Male',
        'address':'111, DDD',
        'city': 'Mclean',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'EEE',
        'gender':'Male',
        'address':'111, EEE',
        'city': 'Richmond',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'FFF',
        'gender':'Male',
        'address':'111, FFF',
        'city': 'Jersey City',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'GGG',
        'gender':'Male',
        'address':'111, GGG',
        'city': 'Jersey City',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'HHH',
        'gender':'Male',
        'address':'111, HHH',
        'city': 'Charlotte',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    },{
        'cname' :'III',
        'gender':'Male',
        'address':'111, III',
        'city': 'Charlotte',
        'state':'VA',
        'zipcode': '123456',
        'email': 'example@example.com',
        'phone': '1234567890'
    }]
}

const getCamper = (req, res) => {
    console.log('GetCamper');
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(JSON.stringify(camperJSON));
}

const createCamper = (req, res) => {
    console.log('createCamper');
    console.log(req.body);
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');
    res.send(JSON.stringify({"status":200,"message":"Success"}));   
}

app.get('/campers', getCamper);
app.post('/camper', createCamper);

module.exports = app;