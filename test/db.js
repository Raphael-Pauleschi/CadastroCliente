async function connect(){
    if(global.connection && global.connection.state !== 'disconnected')
    return global.connection;

    const mysql = require("mysql2/promise");
    const connection = await mysql.createConnection("mysql://root:alunofatec@localhost:3306/webii");
    console.log("Conectou no MySQL!");
    global.connection = connection;
    return connection;
}

async function selectUsuario(){
    const conn = await connect();
    const [rows] = await conn.query('SELECT * FROM usuario;');
    return rows;
}

async function insertUsuario(){
    const conn = await connect();
    const sql = 'INSERT INTO usuario (nome,senha) VALUES (?,?);';
    const values = [usuario.nome, usuario.senha];
    return await conn.query(sql,values);
}

module.exports = {selectUsuario, insertUsuario}