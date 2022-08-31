drop database if exists bancoflores;
create database bancoflores;
use bancoflores;

create table funcionarios(
    nome varchar(50) not null,
    cpf varchar(15) not null primary key,
    email varchar(100) not null,
    senha integer not null,
    foto longtext default null
);

create table flores(
    nomeFlor varchar(50) not null,
    id integer(10) auto_increment not null primary key,
    descricao varchar(250) not null,
    valor decimal(5,2) not null,
    fotoFlor longtext default null
);

insert into funcionarios values("Rose Alencar", "458.960.240-70", "marcialencar@gmail.com", 12345, "https://media.istockphoto.com/photos/first-tulips-picture-id500198137?k=20&m=500198137&s=612x612&w=0&h=Su7qQYZIUEPwLft2bIXsWUoUqwQ1mpM759PlBxTgod0=");

insert into flores (nomeFlor, descricao, valor, fotoFlor) values("Amarílis", "Também é conhecida como flor-da-imperatriz, as amarílis são plantas com flores em tons de vermelho, laranja, branco, vinho e até em tons de verde. Se adaptam a diversos tipos de clima e são fáceis de cuidar", "18.75", "https://imagens-revista.vivadecora.com.br/uploads/2018/05/tipos-de-flores-amar%C3%ADlis.jpg");