# Backend CRUD para administrar Recetas de Cocina

Este proyecto consiste en un backend para la práctica de un CRUD de una página para administrar Recetas de Cocina. Utiliza Node.js con Express.js y MongoDB como base de datos para gestionar las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de tarjetas de recetas.

## Demo

Puedes ver una demostración del proyecto en el siguiente enlace: [Demo](https://recetas-cocina.netlify.app/)

![alt text](public/1.png)
![alt text](public/2recetas.png)


## Dependencias Utilizadas

- [cors](https://www.npmjs.com/package/cors): Middleware para habilitar CORS en Express.
- [dotenv](https://www.npmjs.com/package/dotenv): Carga variables de entorno desde un archivo .env.
- [express](https://www.npmjs.com/package/express): Framework web de Node.js para construir aplicaciones web y APIs.
- [express-validator](https://express-validator.github.io/docs/): Middleware para validar y sanear datos de las solicitudes HTTP.
- [mongoose](https://mongoosejs.com/docs/): Librería de modelado de objetos para MongoDB en Node.js.
- [morgan](https://www.npmjs.com/package/morgan): Middleware para registrar solicitudes HTTP en el servidor.
- [nodemon](https://www.npmjs.com/package/nodemon): Utilidad que supervisa los cambios en los archivos y reinicia automáticamente la aplicación.



- Para instalar todas las dependencias del proyecto, ejecuta el siguiente comando desde la terminal, en la raiz de tu proyecto:

```bash
npm install cors dotenv express express-validator mongoose morgan nodemon
```


## Repositorios

- [Backend CRUD Recetas de Cocina](https://github.com/penguinEm/Tp7_backendRecetasDeCocina.git): Enlace al repositorio del backend.
- [Frontend](https://github.com/penguinEm/tp7_frontRecetasDeCocina.git): Enlace al repositorio del frontend.

### Base de Datos MongoDB

El proyecto utiliza un cluster y base de datos MongoDB alojados en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).

### Despliegue en Vercel

El backend del proyecto se ha desplegado en Vercel. Puedes acceder a la API en el siguiente enlace: [Backend en Vercel](https://vercel.com/)
