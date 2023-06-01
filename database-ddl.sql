DROP DATABASE IF EXISTS `inventario-iud`;
CREATE DATABASE `inventario-iud`;

USE `inventario-iud`;

CREATE TABLE equipos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE estados (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE tipos (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE usuarios (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    email VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE marcas (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE inventario (
    serial INT NOT NULL AUTO_INCREMENT,
    modelo VARCHAR(50),
    descripcion VARCHAR(50),
    urlFoto VARCHAR(50),
    color VARCHAR(50),
    fechaCompra DATETIME,
    precio DECIMAL,
    idUsuarioACargo INT,
    FOREIGN KEY (idUsuarioACargo) REFERENCES usuarios(id),
    idMarca INT,
	FOREIGN KEY (idMarca) REFERENCES marcas(id),
    idEstado INT,
    FOREIGN KEY (idEstado) REFERENCES estados(id),
    idIipo INT,
    FOREIGN KEY (idIipo) REFERENCES tipos(id),
    PRIMARY KEY (serial)
);