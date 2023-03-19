create database teste;

use sistemadecadastro;

create table usuarios(
nome varchar(50),
email varchar(100),
idade int
);

insert into usuarios values 
('João Cordeiro','joaocordeiro@sptech.school',19);

select * from usuarios;

insert into usuarios values 
('Ramom Barboza','ramombarboza@sptech.school',18);

insert into usuarios values 
('Kevin Wesselka','alemaosafado@sptech.school',20);

use teste;
alter table postagems rename to postagens;

insert into postagems values
(null,'Segunda Sprint','foi melhor ainda');
