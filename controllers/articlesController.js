const db = require("../models");

module.exports = {
  findAll((req, res) => {
    db.articles.find(req.query).sort({date: -1}).then((dbModel) => {
      res.json(dbModel)
    }).catch((err) => {
      return console.log(err);
    });
  });
}
