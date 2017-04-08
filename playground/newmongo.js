const {MongoClient,ObjectID}= require("mongodb");
  MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    console.log("success");

db.collection("myDB").find().count().then((count)=>{
  console.log(`count: ${count}`);
},(err)=>{
  
})
    // db.collection("myDB").find({_id:new ObjectID("58e606f49c1af709e089440c")}).toArray().then((docs)=>{
    //   console.log(JSON.stringify(docs, undefined, 2));
    // },(err)=>{
    //   console.log("error");
    // })
    db.close();
  });















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
