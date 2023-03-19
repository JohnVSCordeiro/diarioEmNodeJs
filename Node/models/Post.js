const db = require('C:/Users/joaoj/OneDrive/Área de Trabalho/Node/models/bd.js')


const post = db.sequelize.define('postagens',{
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
       type: db.Sequelize.TEXT 
    }
});

//post.sync({force: true});

module.exports = post

