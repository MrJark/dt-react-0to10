# Backend Configurations

Esta es la parte del calendar donde tendré y haré el backend desde cero

## Instalaciones

1. Paquete base para un package.json -> **npm init -y**
2. Paquete para que se actualice la consola automá. cada vez que suceda un cambio en vscode -> **sudo npm i nodemon -g** ( el -g es para que sea global y el sudo para que te deje hacerlo y no salte el error. Te pedirá tu contraseña)
  Para que sea más sencillo el acceder a la funcionalidad del nodemon, en el package.js, en la parte del script he puesto varios comando de npm para  acceder a estás funionalidades más rápido: **"dev": "nodemon index.js",** y **"start": "node index.js"**