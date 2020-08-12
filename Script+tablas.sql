CREATE DATABASE Noticias
GO
USE Noticias
GO

Create Table Noticia(
	NoticiaID int primary key identity(1,1),
	Titulo varchar(120),
	Descripcion varchar(200),
	Contenido varchar(max),
	Fecha Datetime,
	AutorID int
)
GO
Create Table Autor(
	AutorID int primary key identity(1,1),
	Nombre Varchar(100),
	Apellido Varchar(100)
)

