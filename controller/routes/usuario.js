const seguranca = require('../../model/components/seguranca');
const usuarioBanco = require('../../model/repositories/UsuarioDB');
module.exports = function(app){

    app.get('/cadastro',function(req,res){
        if(req.query.fail)
            res.render('usuario/Cadastro', {mensagem: 'Cadastro'});
        else
            res.render('usuario/Cadastro', {mensagem: null});
    });

    app.post('/cadastro/usuario/edit/salvar', (req,res)=>{
        var usuario = {nome: req.body.nome,senha: req.body.senha,id: req.body.id};
        try{
            usuarioBanco.updateUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'alterado'});
        }catch(error){
            res.render('usuario/EditUsuario',{title: "Edição Cadastro", mensagem: "Erro no cadastro"});
        }


    });
    app.post('/cadastro/usuario/salvar',seguranca.autenticar,(req,res)=> {
        try{
            var usuario = {nome: req.body.nome,
            senha:seguranca.ocultarsenha(req.body.senha)}
            usuarioBanco.insertUsuario(usuario);
            res.render('usuario/Sucesso', {mensagem: 'cadastrado'});
        }catch(error){
            console.log(error);
            res.render('usuario/Cadastro', {title: 'Cadastro',
        mensagem: 'Erro no cadastrado'});
        }
    });

    app.get('/lista/usuario',segurnca.autenticar, async(req,res,next)=>{
        try{
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', {mensagem: 'Lista de Usuários', docs});
        }catch(err){
            next(err);
        }
    });
    app.get('delete/usuario/id',seguranca.autenticar, async(req,res,next)=>{
        try{
            var id = req.params.id;
            await usuarioBanco.deleteUsuario(id);
            const docs = await usuarioBanco.selectUsuario();
            res.render('usuario/Lista', {mensagem: 'Usuário excluído com sucesso',docs});
        }catch(err){
            next(err);
        }
    });
}
