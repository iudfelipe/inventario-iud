
CREATE TABLE equipos (
    id INT NOT NULL,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE estados (
    id INT NOT NULL,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE tipos (
    id INT NOT NULL,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE usuarios (
    id INT NOT NULL,
    nombre VARCHAR(255),
    email VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE marcas (
    id INT NOT NULL,
    nombre VARCHAR(255),
    estado BOOLEAN,
    fechaCreacion DATETIME,
    fechaActualizacion DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE inventario (
    serial INT NOT NULL,
    modelo VARCHAR(50),
    descripcion VARCHAR(50),
    urlFoto VARCHAR(50),
    color VARCHAR(50),
    fechaCompra DATETIME,
    precio DECIMAL,
    idUsuarioACargo INT,
    CONSTRAINT fk_idUsuarioACargo FOREIGN KEY idUsuarioACargo REFERENCES usuarios(id),
    idMarca INT,
    CONSTRAINT fk_idMarca FOREIGN KEY idMarca REFERENCES marca(id),
    idEstado INT,
    CONSTRAINT fk_idEstado FOREIGN KEY idEstado REFERENCES estado(id),
    idIipo INT,
    CONSTRAINT fk_idIipo FOREIGN KEY idIipo REFERENCES tipo(id),
    PRIMARY KEY (serial)
);