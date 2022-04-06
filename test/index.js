(async =>{
const db = require("./db");
console.log('SELECT * FROM usuario');
const usuarios =  db.selectUsuario;
console.log(usuarios);
})();