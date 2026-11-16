CREATE DATABASE crud_funcionarios;
USE crud_funcionarios;
CREATE TABLE IF NOT EXISTS usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    login VARCHAR(50) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

INSERT IGNORE INTO usuarios (login, senha) VALUES ('admin', '1234');

CREATE TABLE IF NOT EXISTS departamentos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    localizacao VARCHAR(100) NOT NULL
);

INSERT INTO departamentos (nome, localizacao) VALUES 
('Tecnologia da Informação', 'Bloco A - 2º Andar'),
('Recursos Humanos', 'Bloco B - 1º Andar'),
('Financeiro', 'Bloco A - 1º Andar');

CREATE TABLE funcionarios (
id INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100) NOT NULL,
funcao VARCHAR(100) NOT NULL,
salario DECIMAL(10,2) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

ALTER TABLE funcionarios
ADD COLUMN email VARCHAR(150),
ADD COLUMN data_admissao DATE,
ADD COLUMN status ENUM('Ativo', 'Inativo') DEFAULT 'Ativo',
ADD COLUMN departamento_id INT,
ADD CONSTRAINT fk_departamento FOREIGN KEY (departamento_id) REFERENCES departamentos(id);