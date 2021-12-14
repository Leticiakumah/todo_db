const { request, response } = require('express');
const express = require('express');
const app = express();
//importing mongoose
const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
//importing todoController
const todoController = require('./controllers/todoController');



app.get('/', (request,response)=>{
    response.send('Hello this is a get response');
});

app.post('/',(request,response)=> {
    response.send('Hello this is a post response');
});

app.put('/',(request,response)=> {
    response.send('Hello this is a put response');
});

app.delete('/',(request,response)=> {
    response.send('Hello this is a delete response');
});
app.get('/todos',(request,response)=> {
    response.send([{
        'title':'plan trip to Accra',
        'description':'will be going to Accra tommorow',
        'time':'Today',
        'isCompleted':false
    }]);
});

app.get('/users',(request,response)=> {
    response.send([{
        'username':'Leticia',
        'password':'lit@me',
        'isCompleted':false
    }]);
});
//listining to request on localhost por 5000
app.listen(5000,() => {
    console.log("My server is Up and running on port 5000");
    //connecting to the database
    mongoose.connect('mongodb+srv://Little:00000000@cluster0.r7gch.mongodb.net/todo_db?retryWrites=true&w=majority')
    .then(function(){
        console.log("Database is connected");
    })
    //console.log("Database is not connected",error);
    .catch(function(error){
        console.log(`Database is not connected, ${error}`);
            // console.log('Database is not connected', error.message);
    });
});

