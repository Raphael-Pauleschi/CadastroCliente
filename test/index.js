(async =>{
const db = require("./db");
console.log('SELECT * FROM usuario');
const usuarios =  db.selectUsuario;
console.log(usuarios);
})();

console.log("INSERT INTO USUARIO");
const result = await db.insertUsuario({nome: "Zé", senha: "uihdssauihus783"});
console.log(result);

console.log("DELETE FROM usuario");
const result3 = await db.deleteUsuario(2);
console.log(result3);

console.log("UPDATE usuario");
const result2 = await db.updateUsuario(3, {nome: "Zé José", senha:"gsdgsdd"});
console.log(result2);