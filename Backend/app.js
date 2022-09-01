const express = require('express');
const mysql = require('mysql'); 

const app = express();

app.use(express.json())

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'bancoflores'
});

app.get('/funcionarios', (request, response) => {
    let string = `select * from funcionarios;`
    con.query(string, (error, result) => {
        if(error === null){
            response.json(result);
        }
    })
})

app.post('/login', (request, response) => {
    const {email, senha} = request.body;
    let string = `select * from funcionarios where email = "${email}" and senha = "${senha}";`
    con.query(string, (error, result) => {
        if(error === null){
            response.json(result);
        }
    })
})

app.post('/novoFuncionario', (request, response) => {
    const {nome, cpf, email, senha, foto} = request.body;
    let string = `insert into funcionarios values ("${nome}", "${cpf}", '${email}', ${senha}, '${foto}');`
    con.query(string,(error, result) => {
        if(error === null){
            response.json(result);
        }
    })
})

app.put('/attFuncionario', (request, response) => {
    const {nome, cpf, email, senha, foto} = request.body;
    let string = `update funcionarios set nome = "${nome}", cpf = "${cpf}", email = "${email}", senha = "${senha}", foto = "${foto}" where cpf = "${cpf}";`
    con.query(string,(error, result) => {
        if(error === null){
            response.json(result);
        }
    })
})

app.delete('/removerFuncionario', (request, response) => {
    const {cpf} = request.body;
    let string = `delete from funcionarios where cpf = "${cpf}";`
    con.query(string, (error, result) => {
        if(error == null) {
            response.json(result);
        }
    })
})

app.get('/listarFlores', (request, response) => {
    let string = "select * from flores;"
    con.query(string, (error, result) => {
        if(error === null){
            response.json(result);
        }
    })
})

app.post('/novaFlor', (request, response) => {
    const {nomeFlor, descricao, valor, fotoFlor} = request.body;
    let string = `insert into flores (nomeFlor, descricao, valor, fotoFlor) values ("${nomeFlor}", "${descricao}", "${valor}", "${fotoFlor}");`
    con.query(string, (error, result) => {
        if(error == null) {
            response.json(result);
        }
    })
})

app.put('/atualizarFlor', (request, response) => {
    const {nomeFlor, descricao, valor, fotoFlor, id} = request.body;
    let string = `update flores set nomeflor = "${nomeFlor}", descricao = "${descricao}", valor = "${valor}", fotoFlor = "${fotoFlor}" where id = ${id};`
    con.query(string, (error, result) => {
        if(error == null) {
            response.json(result);
        }
    })
})

app.delete('/removerFlor/:id', (request, response) => {
    const {id} = request.params;
    let string = `delete from flores where id = ${id};`
    con.query(string, (error, result) => {
        if(error == null) {
            response.json(result);
        }
    })
})

app.listen(4002, () => console.log('Servidor rodando na porta 4002'));