const db = require ('../Configs/db'); //<-sesuaikan dengan (variable).query

module.exports = {
    getAllBooks: () => {
        return new Promise((resolve, reject) => {
          let sql = "SELECT * FROM books";
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
    getAllBooksById: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT * FROM books  WHERE id_book=' + req.params.id_book;
            db.query(sql, (err, results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getAllGenre: () => {
        return new Promise((resolve, reject) => {
          let sql = "SELECT * FROM genre";
          db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else reject(err);
          });
        });
      }, 
    getByGenre: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT a.title,a.author,c.status,b.genre AS genre FROM books a INNER JOIN status c ON a.id_status=c.id_status INNER JOIN genre b ON a.id_genre=b.id_genre WHERE b.id_genre=' + req.params.id_genre;
            db.query(sql, (err,results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            });
        })
    },
    getByStatus: req => {
        return new Promise((resolve, reject) => {
            let sql = 'SELECT a.title,a.author,b.genre,c.status AS status FROM books a INNER JOIN genre b ON a.id_genre=b.id_genre INNER JOIN status c ON a.id_status=c.id_status WHERE c.id_status=' + req.params.id_status;
            db.query(sql, (err, results) => {
                if (!err) {
                    resolve(results);
                } else reject (err);
            })
        })
    },
    postGenre: body => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO genre SET ?', [body],(err, results) => {
                if (!err) {
                    resolve(results);
                } else {reject(err);}
            });
        });
    },
    postBooks: body => {
        return new Promise((resolve, reject) => {
            db.query('INSERT INTO books SET ?',[body],(err, results) => {
                if (!err) {
                    resolve(results);
                } else {reject(err);}
             });
        });
    },
    putBookbyId: req => {
        return new Promise((resolve, reject) => {
          let sql =
            "UPDATE books SET title='" +
            req.body.title +
            "', author='" +
            req.body.author +
            "',id_genre='" +
            req.body.id_genre +
            "',id_status='" +
            req.body.id_status +
            "' WHERE id_book=" +
            req.params.id_book;
                db.query(sql, (err, results) => {
            if (!err) {
              resolve(results);
            } else {
              reject(err);
            }
          });
        });
      },
    deleteBooks: req => {
        return new Promise((resolve,reject)=>{
            let sql = "DELETE FROM books WHERE id_book="+req.params.id_book+" ";
            let query = db.query(sql,(err,results)=>{
                if (!err){
                    resolve(results);
                }else{
                    reject(err);
                }
            })
        })
    }
}