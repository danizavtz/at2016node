CREATE TYPE genero as ENUM('Masculino','Feminino');
CREATE TYPE estadocivil as ENUM('Solteiro', 'Casado','Uniao','Divorciado', 'Viuvo');
CREATE TYPE tipo as ENUM('Cadastrador','Administrador','Usuario');

CREATE TABLE cadastrador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50),
    email VARCHAR(80),
    login VARCHAR(20) UNIQUE,
    password BYTEA,
    permissao tipo,
);


CREATE TABLE cadastro_trabalhador (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(50) ,
    sexo VARCHAR(9) ,
    cpf VARCHAR(11) ,
    rg VARCHAR(15) ,
    expeditor VARCHAR(10) ,
    naturalidade VARCHAR(50) ,
    uf VARCHAR(2) ,
    nascimento DATE ,
    mae VARCHAR(50) ,
    pai VARCHAR(50) ,
    pis VARCHAR(11) ,
    tituloe VARCHAR(12) ,
    estadoc VARCHAR(12) ,
    nit VARCHAR(11) ,
    agencia VARCHAR(12) ,
    conta VARCHAR(15) ,
    operacao VARCHAR(10) ,
    ctps VARCHAR(15) ,
    serie VARCHAR(15) ,
    ufctps VARCHAR(2) ,
    usina VARCHAR(100) ,
    cnpj VARCHAR(14) ,
    qfilhos VARCHAR(12) ,
    alfabetizado boolean ,
    gestante boolean ,
    escolaridade VARCHAR(30) ,
    telefone VARCHAR(15) ,
    celular VARCHAR(15) ,
    sdesemprego boolean ,
    logradouro VARCHAR(50) ,
    numero VARCHAR(5) ,
    bairro VARCHAR(25) ,
    cidade VARCHAR(25) ,
    estado VARCHAR(25) ,
    complemento VARCHAR(25) ,
    cep VARCHAR(8) ,
    depis boolean ,
    decontratotrabalho boolean ,
    dectps boolean ,
    decpf boolean ,
    derg boolean ,
    decomprovanteendereco boolean ,
    nomedeclaracao VARCHAR(100) ,
    datacadastramento timestamp with time zone default now(),
    cadastrador_id REFERENCES cadastrador(id) on delete set null,
    revisado_id REFERENCES cadastrador(id) on delete set null,
    data_revisado timestamp with time zone,
    desautorizado boolean ,
    exportado boolean ,
    habilitado boolean ,
    pago boolean 
);