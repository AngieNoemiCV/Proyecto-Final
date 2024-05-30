CREATE DATABASE IF NOT EXISTS DesafiosMate;

use DesafiosMate

CREATE TABLE Usuarios (
    id_usuario      INTEGER         NOT NULL AUTO_INCREMENT,
    nombre          VARCHAR(225)    NOT NULL,
    email           VARCHAR(225)    NOT NULL,
    contrasena      VARCHAR(225)    NOT NULL,
    tipo_usuario    VARCHAR(225)    NOT NULL,
    fecha_creacion  DATE            NOT NULL,
    PRIMARY KEY     (id_usuario)
);

CREATE TABLE desafios (
    id_desafio      INTEGER         NOT NULL AUTO_INCREMENT,
    titulo          VARCHAR(225)    NOT NULL,
    descripcion     VARCHAR(225)    NOT NULL,
    nivel           INTEGER         NOT NULL,
    tema            VARCHAR(225)    NOT NULL,
    imagen          VARCHAR(225)    NOT NULL,
    PRIMARY KEY     (id_desafio)
);

CREATE TABLE foros (
    id_foro         INTEGER         NOT NULL AUTO_INCREMENT,
    nivel           INTEGER         NOT NULL,
    tema            VARCHAR(225)    NOT NULL,
    desafio         VARCHAR(225)    NOT NULL,
    descripcion     TEXT            NOT NULL,
    fecha_creacion  DATE            NOT NULL,
    nombre_usuario  VARCHAR(225)    NOT NULL,
    PRIMARY KEY     (id_foro)
);

CREATE TABLE temas (
    id_tema         INTEGER         NOT NULL AUTO_INCREMENT,
    foro_id         INTEGER         NOT NULL,
    titulo          VARCHAR(225)    NOT NULL,
    descripcion     VARCHAR(225)    NOT NULL,
    fecha_creacion  DATE            NOT NULL,
    PRIMARY KEY     (id_tema),
    FOREIGN KEY     (foro_id)       REFERENCES foros(id_foro)
);

CREATE TABLE respuestas_usuario_des (
    id_respuesta    INTEGER         NOT NULL AUTO_INCREMENT,
    desafio_id      INTEGER         NOT NULL,
    usuario_id      INTEGER         NOT NULL,
    respuesta       VARCHAR(225)    NOT NULL,
    fecha_envio     DATE            NOT NULL,
    PRIMARY KEY     (id_respuesta),
    FOREIGN KEY     (desafio_id)    REFERENCES desafios(id_desafio),
    FOREIGN KEY     (usuario_id)    REFERENCES Usuarios(id_usuario)
);



CREATE TABLE publicaciones (
    id_publicacion  INTEGER         NOT NULL AUTO_INCREMENT,
    tema_id         INTEGER         NOT NULL,
    usuario_id      INTEGER         NOT NULL,
    contenido       VARCHAR(225)    NOT NULL,
    fecha_creacion  DATE            NOT NULL,
    PRIMARY KEY     (id_publicacion),
    FOREIGN KEY     (tema_id)       REFERENCES temas(id_tema),
    FOREIGN KEY     (usuario_id)    REFERENCES Usuarios(id_usuario)
);


