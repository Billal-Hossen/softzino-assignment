const { BooksInfo } = require("../models/BookInfoModel");


module.exports.createBooksInfo = async (req,res)=>{
  const bookInfo= req.body;
 let info={}
 info = new BooksInfo(bookInfo)

  const result = await info.save()

 
  return res.json(result)
}