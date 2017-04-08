const {MongoClient,ObjectID}= require("mongodb");
  MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
if(err){
  console.log("unable to connect");
}
    console.log("successfully connected");

    db.collection("myDB").findOneAndDelete({name:"khatri"}).then((result)=>{
      console.log(JSON.stringify(result));
    });


    db.close();
  });



// db.collection("myDB").deleteMany{name:"khatri"}).then((result)=>{
//   console.log(JSON.stringify(result));
//
//   db.collection("myDB").deleteOne{name:"khatri"}).then((result)=>{
//     console.log(JSON.stringify(result));











// const {MongoClient} = require("mongodb");
// MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
// if(err){
//   console.log("error occure");
//
// }
// console.log("success");
//
// db.collection("myDB").find().toArray().then((docs)=>{
//   console.log("myDB");
//   console.log(JSON.stringify(docs,undefined,2));
// })
// })
