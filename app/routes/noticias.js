module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        // console.log("Query: ");
        // console.log(req.query);
        // res.send("ola");
        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    })
    app.get("/noticias/:id", function (req, res) {
        console.log("parametro: ")
        console.log(req);
        res.send("ola");
       /*  var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        }); */
    })   
    app.get("/noticias/:Identificacao/:NomeCompleto", function (req, res) {
        console.log("parametro: ")
        console.log(req.params);
        res.send("ola");
       /*  var conexao = app.config.dbConnection();
        conexao.query('select * from noticias where idnoticia = req.params.Identificacao', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        }); */
    })   
}