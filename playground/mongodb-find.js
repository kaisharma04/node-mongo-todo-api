//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true},(err,client) =>{

        if(err){
            return console.log('unable to connect to mongodb server');
        }
         
        var db=client.db('TodoApp');
        console.log('connect to mongodb server');


    //    db.collection('Todos').find({
    //        _id: new ObjectID('5faad4610e9faadc7dcced19')
    //    }).toArray().then((docs) => {
            
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs,undefined,2));  

    //    }, (err) => {
    //        return console.log("unable to fetch todos",err);
    //    });

    db.collection('Todos').find().count().then((count) => {
         
       console.log(`Todos count: ${count}`);  

    }, (err) => {
        return console.log("unable to fetch todos",err);
    });


        //client.close();

});