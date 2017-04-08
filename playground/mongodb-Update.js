const {MongoClient,ObjectID}= require("mongodb");
  MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db)=>{
    console.log("success");

db.collection("myDB").findOneAndUpdate({
  _id: new ObjectID("58e607cf960fccde16f6aff7")
},
{
  $set:{name:"noman khatri"},
  $inc:{age:1}
},
{returnOriginal:false}
).then((result)=>{
  console.log(result);
})

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
