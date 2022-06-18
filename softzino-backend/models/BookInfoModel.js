const {Schema, model} =require("mongoose");
const BookInfoSchema = Schema({
  title:{type:String, required:true},
  price:{type:Number, required:true},
  author:{type:String, required:true},
  description:{type:String, required:true}
});

module.exports.BooksInfo= model("BooksInfo",BookInfoSchema)