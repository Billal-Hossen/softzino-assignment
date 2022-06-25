const {Schema, model} =require("mongoose");
const BookInfoSchema = Schema({
  userName:{type:String, unique: true, required:true},
  tickectPrice:{type:String, required:true},
  userGender:{type:String, required:true},
  locationForm:{type:String, required:true},
  locationTo:{type:String, required:true},
  selectDate:{type:String, required:true},
  selectTime:{type:String, required:true},
});

module.exports.BooksInfo= model("BooksInfo",BookInfoSchema)