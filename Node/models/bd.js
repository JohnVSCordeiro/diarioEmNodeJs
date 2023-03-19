// Conexão com o banco de dados MySQL (Conectar com banco de dados)
const  Sequelize  = require("sequelize");

const sequelize = new Sequelize('postapp', 'root', 'joao2003', {
    host: "localhost", 
    dialect: 'mysql'
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}
