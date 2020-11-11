//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true},(err,client) =>{

        if(err){
            return console.log('unable to connect to mongodb server');
        }
         
        var db=client.db('TodoApp');
        console.log('connect to mongodb server');


       /* db.collection('Todos').insertOne({
            text: 'something to do',
            completed: false
        },(err,result) => {

            if(err){
                return console.log('unable to insert todo',err);
            }

            console.log(JSON.stringify(result.ops,undefined,2));

        });
         */

        db.collection('Users').insertOne({
            name: 'Krishanu',
            age: 23,
            location: 'Dehradun'
        },(err,result) => {
                
            if(err){
                return console.log('unable to insert user',err);
            }
            
            console.log(result.ops);

        });



        client.close();

});