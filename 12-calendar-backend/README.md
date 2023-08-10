# Backend Configurations

Esta es la parte del calendar donde tendré y haré el backend desde cero. La aplicación tendrá como base de datos y backend **[MongoDB Atlas](https://www.mongodb.com/cloud/atlas/efficiency?utm_source=google&utm_campaign=gs_americas_canada_search_brand_atlas_desktop&utm_term=mongo%20atlas&utm_medium=cpc_paid_search&utm_ad=e&gclid=Cj0KCQjwiYL3BRDVARIsAF9E4GfQWQYG_pbTlJA5eixJKM75IaFYqk4nUBlKe0iXkKn4kXc1HZmKSikaAtKzEALw_wcB)** y me apoyaré de **[mongoose](https://mongoosejs.com)**

## Despliegue

El despliegue del backend será a través de [heroku](https://www.heroku.com)

## Instalaciones

1. Paquete base para un package.json -> **npm init -y**
2. Paquete para que se actualice la consola automá. cada vez que suceda un cambio en vscode -> **sudo npm i nodemon -g** ( el -g es para que sea global y el sudo para que te deje hacerlo y no salte el error. Te pedirá tu contraseña)
  Para que sea más sencillo el acceder a la funcionalidad del nodemon, en el package.js, en la parte del script he puesto varios comando de npm para  acceder a estás funionalidades más rápido: **"dev": "nodemon index.js",** y **"start": "node index.js"**
3. Instalación de express -> **npm i express**
4. Intalación del .env -> **npm i dotenv**
5. Para validar condiciones en express -> **npm i express-validator**
6. Instalación de mongoose -> **npm i mongoose**
7. Para la encriptación  de las constraseñas voy a usar bcryptjs -> **npm i bcryptjs**
8. Para la creación de los tokens voy a usar el JsonWebToken (JWT) -> [JWT Link](https://jwt.io) y lo instalo como **npm i jsonwebtoken**
9. Instalación y configuaraciópn de los cors [Link](https://www.npmjs.com/package/cors) y lo instalas con **npm install cors**
10. Para validar fechas, uso moment -> **npm i moment**

## Lecturas

- [Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

## Notas / Explicaciones 

- **Middleware**: es una función que se ejecuta antes de que nada más suceda
- Al hacer la parte de los eventos, hace falta el **x-token** y para ello tienes que llamar al loginUser para que te de el token el cual poner como valor, sino te pedirá uno