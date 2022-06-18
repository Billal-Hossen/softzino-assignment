
const BookRouter = require("../routers/BookRouter")
module.exports = app =>{
  app.use("/api/addBookInfo",BookRouter)
}