var app = require("./config/server");

var rotahome = require("./app/routes/home")(app);
var rotacursos = require("./app/routes/cursos")(app);
var rotaesportes = require("./app/routes/esportes")(app);
var rotaformaddnews = require("./app/routes/form_add_news")(app);
var rotanoticias = require("./app/routes/noticias")(app);


app.listen(3000, function(){
    console.log('Servidor rodando com express');
});