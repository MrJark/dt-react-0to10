# Backend Configurations

Esta es la parte del calendar donde tendré y haré el backend desde cero

## Instalaciones

1. Paquete base para un package.json -> **npm init -y**
2. Paquete para que se actualice la consola automá. cada vez que suceda un cambio en vscode -> **sudo npm i nodemon -g** ( el -g es para que sea global y el sudo para que te deje hacerlo y no salte el error. Te pedirá tu contraseña)
  Para que sea más sencillo el acceder a la funcionalidad del nodemon, en el package.js, en la parte del script he puesto varios comando de npm para  acceder a estás funionalidades más rápido: **"dev": "nodemon index.js",** y **"start": "node index.js"**
3. Instalación de express -> **npm i express**
4. Intalación del .env -> **npm i dotenv**
5. Para validar condiciones en express -> **npm i express-validator**

## Lecturas

- [Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)

## Notas / Explicaciones 

- **Middleware**: es una función que se ejecuta antes de que nada más suceda
