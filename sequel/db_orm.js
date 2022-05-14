const Sequelize = rquire('sequelize');
const sequelize = new Sequelize('webii', 'root', 'root', {dialect: 'mysql', host: 'localhost', port:3306})

module.exports = {sequelize}
