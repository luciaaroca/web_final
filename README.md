# Proyecto: Tienda Online de Camisetas de Fútbol ⚽️

 Este proyecto consiste en el desarrollo de una **web SPA (Single Page Aplication) de venta de camisetas**, abarcando tanto la parte de desarrollo **backend** como el **frontend**.

En el **backend**, se implementará una API con Node.js y Express, gestionando usuarios, camisetas, favoritos y órdenes de compra, con autenticación mediante JWT y validación de datos.

En el **frontend**, se construirá una interfaz interactiva y responsiva con **React**, permitiendo a los usuarios navegar por el catálogo, filtrar por tipo o liga, añadir camisetas a favoritos y gestionar su carrito de la compra.

Se integrará una **base de datos PostgreSQL** para almacenar usuarios, camisetas , pedidos y favoritos

El objetivo es ofrecer una **aplicación web completa y funcional**, combinando un backend robusto con un frontend moderno y dinámico.

![Mockup Web](./assets/mockup.jpeg)
![Ver video](./assets/video_ordenador.gif)


## Modelo de datos relacional
![Modelo de datos](./assets/modelo.datos.jpg)

## Funcinalidades ⚙️
- Ver **camisetas** disponibles
- Filtrado de **camisetas** por coincidencia de nombre
- **Secciones**: Liga, Especiales, Retro
- **Usuarios**: LogIn, SignUp, LogOut(Con validación Regex)
- **Favoritos**: añadir, borrar, ver (necesidad de estar logueado)
- **Carrito**: añadir a carrito (mediante useContext) + agregar pedidos a la bbdd
- **Local Storage**: para guardar los datos del carrito aún recargando la página
- **Autenticación JWT** al hacer LogIn
- Adaptabilidad a móvil y ordernador -> **Web responsive**
- Documentación de las rutas con **Swagger**

## Tecnologías usadas 💻

- JavaScript
- SASS
- Frontend: React
- BBDD: PostgreSQL
- Backend: Express.js, Node.js
- Deploy: Render(BBDD SQL)
- Autenticación: JWT

## Librerías 📕

- React
- Axios
- Jwt-decode
- React-burger-menu
- Normalize.css
- Sass
- Sweetalert2
- Vite
- Create-react-component-folder
- Express
- Cors
- Dotenv
- Cookie-parser
- Bcryptjs
- Jsonwebtoken
- Pg
- Swagger-jsdoc
- Swagger-ui-express
- Concurrently
- Nodemon

## 📄 Instrucciones
### 1. Clona el repositorio 

```bash
git clone https://github.com/luciaaroca/web_final.git
```

### 2. Instalar dependendias

```bash
npm install (Dependencias globales)

cd frontend
npm install (Dependencias frontend)

cd ../backend
npm install (Dependencia backend)
```

### 3. Configurar variables de entorno


```bash
Backend:
# BBDD remota
NODE_ENV=
DB_HOST=
DB_USER=
DB_DATABASE=
DB_PORT=
DB_PASSWORD=

# Json Web Token
MY_TOKEN_SECRET=
--------
Frontend
VITE_API_URL=
```
### 5. Iniciar el servidor:
```bash
- npm run dev --prefix backend
- npm run dev --prefix frontend
- npm run start:all -> para ambos
```

## Árbol de Componentes

    App --> App.jsx 
    Header 
        ->Nav--->  (links rutas)
           ->Home
           ->Favoritas
           ->Contacto
           ->Perfil
           ->Carrito
           ->Ligas
           ->Retro
           ->Especiales

    Main       
        ->CarritoList
            ->CarritoItem
        ->Contact
        ->EspecialContainer
            ->EspecialList
                ->EspecialItem
        ->FavoriteContainer
            ->FavoriteList
                ->FavoriteItem
        ->FavoriteDetail
       ->Home
            ->Search
            ->TshirtList
                ->TshirtItem
        ->LigasContainer
            ->LigaList
                ->LigaItem
        ->LogIn
            ->LogInForm
        ->Profile
        ->RetroContainer
           ->RetroList
                ->RetroItem
        ->SignUp
            ->SignUpForm
        ->TshirtDetail

## Probar rutas con Swagger
```bash
http://localhost:3000/api-docs
```

## Lecciones aprendidas💡

- Crear mi propia API con Node.js y Express.
- Crear endpoints de BBDD PostgreSQL.
- Trabajar con React y sus Componentes.
- Uso de librerías.
- Estilos con SASS.
- Autenticación con JWT.
- Uso de Hooks de React (useState, useEffect, useContext)


## Funcionalidades futuras 🗒️

- Nueva vista-> Compra: esto irá acompañdo de su correspondiente pasarela de pago.
- Completar la web con todos los productos reales disponibles en la tienda.
- Despliegue en Render en el que las fotos se vean correctamente subiéndolas a una plataforma que permita su visualización.

## Autor 👩🏽‍💻

- Nombre: **Lucía Aroca Solís**
- LinkedIn: https://www.linkedin.com/in/luc%C3%ADa-aroca-sol%C3%ADs/
- GitHub: https://github.com/luciaaroca/web_final.git


