const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const Post = require('./models/Post');





// config
// template engine
app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    },
}))
app.set('view ensine', 'handlebars')


// Conexão com o banco de dados MySQL (Conectar com banco de dados)
//const  Sequelize  = require("sequelize");

//const sequelize = new Sequelize('teste', 'root', 'joao2003', {
//    host: "localhost", 
//    dialect: 'mysql'
//});

// body Parser confisuração (PEgar dado de um formulario)
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


// Rotas

app.get('/', function (req, res) {
    res.render('C:/Users/joaoj/OneDrive/Área de Trabalho/Node/views/layouts/home.handlebars')
})




app.get('/cad', function (req, res) {
    res.render('C:/Users/joaoj/OneDrive/Área de Trabalho/Node/views/layouts/formulario.handlebars')
});

app.get('/lista', function (req, res) {
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(function (post) {
        res.render('C:/Users/joaoj/OneDrive/Área de Trabalho/Node/views/layouts/lista.handlebars', {
            posts: post
        })

    })

})


app.post('/add', function (req, res) {
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function () {
        res.redirect("/")
    }).catch(function () {
        res.send("ERRO ao criar o formulario" + erro)
    })

});

app.get('/deletar/:id', function (req, res) {
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(function () {
        res.send("Postagem deletada com sucesso")
    }).catch(function (erro) {
        res.send('Essa postagem não existe')
    })
})




app.listen(9922, function () {
    console.log("Servidor rodando na url http://localhost:9922/");

});