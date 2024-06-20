module.exports = function (app) {
    app.get("/noticias", function (req, res) {
        var conexao = app.config.dbConnection();
        conexao.query('select * from noticias', function (error, result) {
            res.render('noticias/noticias', { noticias: result })
        });
    })
    app.get("/noticias/:id", function (req, res) {
        res.send("ola");

    })
    app.get("/noticias/:Identificacao/:NomeCompleto", function (req, res) {
        res.send("ola");

    })
    app.post("/noticias/:Identificacao/:NomeCompleto", function (req, res) {
        // var conexao = app.config.dbConnection();
        var queryNoticias 
        = "INSERT INTO noticias (titulo,noticia) VALUES ('"
        +req.params.Identificacao+"','"+req.params.NomeCompleto+"')"; 
        console.log(queryNoticias);
        res.send("olá");
    })

}