const MongoClient = require('mongodb').MongoClient
 MongoClient.connect("mongodb://localhost:27017/TodooApp",(err,db)=>{
   if(err){
     console.log("error occure");
   }
   console.log("success");
  // db.collection('TodoApp').insertOne({
  //   text:"somethind to do",
  //   completed:false
  // });

// db.collection("MydDb").insertOne({
//     _id:"1234",
//     name:"noman khatri",
//     age:24
//
// },(err,result)=>{
//   if(err){
//     console.log("error occure");
//   }
//   console.log(result.ops[0]._id.getTimesTamp());
// });
   db.close();
 });
