const booksmodel = require("../Models/app");

module.exports = {
  getAllBooks: (req, res) => {
    booksmodel
      .getAllBooks()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getAllGenre: (req, res) => {
    booksmodel
      .getAllGenre()
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },

  getAllBooksById: (req, res) => {
    booksmodel
      .getAllBooksById(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  postGenre: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .postGenre(body)
      .then(response =>
        res.json({
          status: 200,
          result: body
        })
      )
      .catch(err => res.json(err));
  },
  getByGenre: (req, res) => {
    booksmodel
      .getByGenre(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  getByStatus: (req, res) => {
    booksmodel
      .getByStatus(req)
      .then(response => res.json(response))
      .catch(err => res.json(err));
  },
  postBooks: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .postBooks(body)
      .then(response =>
        res.json({
          status: 200,
          result: body
        })
      )
      .catch(err => res.json(err));
  },
  putBookbyId: (req, res) => {
    const body = {
      ...req.body
    };
    booksmodel
      .putBookbyId(req)
      .then(response => res.json({
          result:body
      }))
      .catch(err => res.json(err));
  },
  deleteBooks: (req, res) => {
    booksmodel
      .deleteBooks(req)
      .then(response =>
        res.json({
          message: "Delete Success"
        })
      )
      .catch(err => res.json(err));
  }
};
