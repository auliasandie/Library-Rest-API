var express = require('express');
var router = express.Router();
const librarycontroller = require('../Controllers/app')

/* GET users listing. */
router.get('/',librarycontroller.getAllBooks);
router.get('/books/:id_book',librarycontroller.getAllBooksById);
router.get('/genre', librarycontroller.getAllGenre);
router.get('/genre/:id_genre', librarycontroller.getByGenre);
router.get('/status/:id_status', librarycontroller.getByStatus);
router.post("/",librarycontroller.postBooks);
router.post('/genre', librarycontroller.postGenre);
router.put('/edit/:id_book', librarycontroller.putBookbyId);
router.delete('/delete/:id_book', librarycontroller.deleteBooks);


module.exports = router;
