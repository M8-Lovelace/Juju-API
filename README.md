# Juju

Sistema de gestión de libros en línea utilizando Nodejs. Este sistema permitirá a los usuarios crear, editar, eliminar y consultar libros. La API será el núcleo del sistema, permitiendo la interacción con una base de datos de libros en MongoDB.

## Requisitos

Antes de comenzar a usar este proyecto, asegúrese de tener instalado lo siguiente:

- Node.js
- npm

## Instalación

Para comenzar, clone este repositorio en su máquina local y luego ejecute el siguiente comando en la línea de comandos en el directorio raíz del proyecto:

- npm install

Esto instalará todas las dependencias necesarias para el proyecto.

## Uso

Para comenzar a usar la aplicación, primero configure las variables de entorno en un archivo `.env` en el directorio raíz del proyecto. Se deben configurar las siguientes variables:

- PORT: el puerto en el que se ejecutará la aplicación
- MONGO_URI: la URL de conexión para la base de datos MongoDB

Una vez que se han configurado las variables de entorno, puede iniciar la aplicación con el siguiente comando:

- npm run start

Esto iniciará la aplicación y la hará accesible en `http://localhost:puerto` , donde "puerto" es el número de puerto configurado en las variables de entorno.
