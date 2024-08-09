module.exports = function (app) {
    app.get("/formulario_inclusao_noticias", function (req, res) {
        var conexao = app.config.dbConnection();
        conexao.query('select * from tiponoticia', function (error, result) {
            console.log(result);
            res.render('admin/form_add_news', { noticias: result })
        });
        //res.render("admin/form_add_news");
    });
    app.post("/formulario_inclusao_noticias", function (req, res) {
        var cadOk=true;
        console.log(req.body);
        res.render("admin/form_add_news",{cadOk});
    });
}














 // res.send("OK o título é:"+req.body.titulo);
        /* insert banco de dados */
    // app.post('/formulario_inclusao_noticias', function (req, res) {
    //     console.log(req.body);
    //     res.send("ola");
        
        //var conexao = app.config.dbConnection();
       /*  conexao.query("INSERT INTO noticias (titulo,noticia) VALUES ('" + req.body.titulo + "','" + req.body.noticia + "')", function (error, result) {
            if (error != null) {
                res.render('secao/404');
            } else {
                res.render('admin/form_add_news', { cadok: 1 })
            }
        }) */
    // })
