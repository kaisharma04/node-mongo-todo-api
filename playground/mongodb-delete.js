//const MongoClient = require('mongodb').MongoClient;
const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',{useUnifiedTopology: true},(err,client) =>{

        if(err){
            return console.log('unable to connect to mongodb server');
        }
         
        var db=client.db('TodoApp');
        console.log('connect to mongodb server');

        //deleteMany
        // db.collection('Todos').deleteMany({text: 'eat breakfast'}).then((result) => {
        //     console.log(result);
        // });

        //deleteOne
        // db.collection('Todos').deleteOne({text: 'eat breakfast'}).then((result) => {
        //     console.log(result);
        // });


        //findOneAndDelete
            // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
            //     console.log(result);
            // });

        // db.collection('Users').deleteMany({name: 'Krishanu'}).then((result) => {
        //     console.log(result);
        // });

        db.collection('Users').findOneAndDelete({
            _id: new ObjectID("5fac79db10ed46055f935261")
        }).then((result) => {
            console.log(JSON.stringify(result,undefined,2));
        });


        //client.close();

});