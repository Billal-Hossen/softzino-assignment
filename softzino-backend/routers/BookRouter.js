const { createBooksInfo } = require('../controller/BookInfoController');

const router= require('express').Router();

router.route("/").post(createBooksInfo);

module.exports =router;