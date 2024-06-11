
var dbConnetion = require("../../config/dbConnetion");

module.exports = function (app) {

    var conexao = dbConnetion();

    app.get("/noticias", function (req, res) {
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    })


}