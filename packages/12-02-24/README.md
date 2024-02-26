# Ejercicio práctico: API de usuarios con Node.js, Express, ORM/ODM y JWT

## Duración
1 hora

## Objetivo
Implementar una API RESTful para gestionar usuarios con Node.js, Express, Sequelize/TypeORM/Mongoose, Bcrypt y JWT. La API debe permitir:

- **Registro de usuarios:**
  - Crear un nuevo usuario con nombre, correo electrónico y contraseña.
  - Encriptar la contraseña con Bcrypt antes de guardarla en la base de datos.
- **Inicio de sesión:**
  - Validar las credenciales del usuario (correo electrónico y contraseña).
  - Generar un token JWT si las credenciales son válidas.
- **Obtener usuarios:**
  - Obtener una lista de todos los usuarios (solo si se proporciona un token JWT válido).

## Tecnologías
- Node.js
- Express
- Sequelize/TypeORM/Mongoose (ORM/ODM)
- Bcrypt (encriptación de contraseñas)
- JWT (tokenización)

## Instrucciones

### Configuración del proyecto
- Crear un nuevo proyecto Node.js.
- Instalar las dependencias necesarias: `npm install express sequelize bcrypt jsonwebtoken pg pg-hstore`.
- Configurar la base de datos PostgreSQL (local o remota).
- Crear un archivo `.env` con las variables de entorno de la base de datos.

### Modelo de usuario
- Definir el modelo de usuario con Sequelize, incluyendo nombre, correo electrónico, contraseña (encriptada) y token JWT.
- Sincronizar el modelo con la base de datos.

### Rutas API
#### Registro de usuarios
- Crear una ruta POST para registrar nuevos usuarios.
- Validar la entrada del usuario (nombre, correo electrónico y contraseña).
- Encriptar la contraseña con Bcrypt antes de guardarla en la base de datos.
- Responder con un mensaje de éxito o error.

#### Inicio de sesión
- Crear una ruta POST para iniciar sesión.
- Validar las credenciales del usuario (correo electrónico y contraseña).
- Generar un token JWT si las credenciales son válidas.
- Responder con el token JWT o un mensaje de error.

#### Obtener usuarios
- Crear una ruta GET para obtener una lista de todos los usuarios.
- Validar el token JWT en la solicitud.
- Devolver la lista de usuarios si el token es válido.
- Responder con un mensaje de error si el token no es válido.

### Seguridad
- Implementar middleware para la autenticación y autorización de las rutas.
- Validar el token JWT en cada solicitud que requiere acceso a datos sensibles.
- Manejar los errores de autenticación y autorización de forma adecuada.

### Pruebas
- Probar las diferentes rutas API con Postman o Insomnia.
- Verificar el correcto funcionamiento del registro, inicio de sesión y obtención de usuarios.
- Asegurar la seguridad de la API mediante la validación de tokens JWT.

## Recursos adicionales
- Documentación de Sequelize: https://sequelize.org/
- Documentación de TypeORM: https://typeorm.io/
- Documentación de TypeORM No-Official: https://orkhan.gitbook.io/typeorm/docs
- Documentación de Mongoose: https://mongoosejs.com/
- Documentación de Bcrypt: https://www.npmjs.com/package/bcrypt
- Documentación de JWT: https://jwt.io/