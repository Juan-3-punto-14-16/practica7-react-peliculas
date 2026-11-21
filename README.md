# Práctica 7 - App de películas con React

## Integrantes
* **Moisés Alejandro Fernández Hernández** – Cliente HTTP (`httpClient`), página principal (`LandingPage`), cuadrícula de películas (`MovieGrid`), tarjeta (`MovieCard`) y pie de página.
* **César Emanuel Hernández Pérez** – Diseño responsivo y hojas de estilo CSS de los componentes y vistas.
* **Yara Susana Vera Godínez** – Punto de entrada (`main`), estructura principal (`App`), helper de imágenes (`getMovieImg`), enrutamiento (`AppRouter`), vista de detalle (`MovieDetails`) y despliegue en Netlify.
* **Juan Pablo Valladolid Ramirez** – Configuración del entorno base, creación y administración del repositorio en GitHub, gestión de variables de entorno y documentación.

## Descripción
Aplicación web tipo SPA (*Single Page Application*) desarrollada con React y Vite que consume la API pública de **The Movie Database (TMDB)** para mostrar un catálogo interactivo de películas y la vista detallada de cada título.

## Tecnologías
* **React** (Biblioteca de interfaz de usuario)
* **Vite** (Entorno de desarrollo y empaquetador)
* **React Router DOM** (Navegación declarativa SPA)
* **CSS3** (Estilos modulares y diseño responsivo)
* **TMDB API v3** (Consumo de datos externos)
* **Git y GitHub** (Control de versiones colaborativo)
* **Netlify** (Despliegue en producción)

## Estructura General del Proyecto
```text
practica7-react-peliculas/
├── public/
│   └── _redirects              # Regla de redirección SPA para Netlify
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx       # Tarjeta individual de película
│   │   ├── MovieCard.css
│   │   ├── MovieGrid.jsx       # Listado en cuadrícula y consumo del catálogo
│   │   └── MovieGrid.css
│   ├── img/
│   │   ├── escudo-cucei.png    # Escudo institucional para el pie de página
│   │   └── placeholder.png     # Imagen de respaldo cuando falta el póster
│   ├── pages/
│   │   ├── LandingPage.jsx     # Vista principal
│   │   ├── MovieDetails.jsx    # Vista de detalle dinámico por ID
│   │   └── MovieDetails.css
│   ├── routers/
│   │   └── AppRouter.jsx       # Configuración de rutas
│   ├── services/
│   │   └── httpClient.js       # Cliente fetch centralizado con API Key
│   ├── utils/
│   │   └── getMovieImg.js      # Constructor de URLs de pósters de TMDB
│   ├── App.jsx                 # Estructura principal (Header, Router y Footer)
│   ├── index.css               # Estilos globales
│   └── main.jsx                # Punto de entrada de React
├── .env.template               # Plantilla de variables de entorno
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Instalación y Ejecución Local

1. **Clonar el repositorio:**
   `git clone https://github.com/Juan-3-punto-14-16/practica7-react-peliculas.git` ->
   `cd practica7-react-peliculas`

2. **Instalar las dependencias:**
   `npm install`

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto (puedes duplicar `.env.template`) y agrega tu clave de API v3 de TMDB:
   `VITE_TMDB_API_KEY=TU_API_KEY_DE_TMDB`

4. **Iniciar el servidor de desarrollo:**
   Ejecuta `npm run dev`
   y después abre en tu navegador la dirección local indicada (por defecto `http://localhost:5173`).

## Rutas Utilizadas
* `/` – **Página Principal (`LandingPage`):** Renderiza el catálogo general de películas obtenidas desde el endpoint `/discover/movie`.
* `/movies/:movieId` – **Vista de Detalle (`MovieDetails`):** Lee el parámetro dinámico `movieId` de la URL mediante `useParams()` y consulta `/movie/:movieId` para mostrar póster, título, géneros y sinopsis.

## API Utilizada
Se utiliza la API REST de **The Movie Database (TMDB)** (`https://api.themoviedb.org/3`) con respuestas configuradas en español (`language=es-MX`):
* `GET /discover/movie` – Obtiene el listado inicial de películas populares/descubrimiento.
* `GET /movie/{movieId}` – Obtiene la información detallada de una película específica.
* **Servidor de imágenes:** `https://image.tmdb.org/t/p/w500{poster_path}` para la carga optimizada de carátulas.


## Funcionamiento
1. **Carga inicial:** Al acceder a `/`, el componente `MovieGrid` ejecuta una petición asíncrona dentro de `useEffect`, almacena el arreglo de resultados en el estado `movies` con `useState` y renderiza cada tarjeta mediante `MovieCard`.
2. **Navegación y detalle:** Al hacer clic en cualquier tarjeta, `Link` redirige a `/movies/{id}` sin recargar la página. `MovieDetails` captura el ID, consulta la API y muestra la ficha técnica completa.
3. **Resiliencia:** Si una película no cuenta con imagen en la API, `getMovieImg` asigna automáticamente `placeholder.png`. En producción, `public/_redirects` garantiza que el acceso directo a rutas internas funcione sin errores 404.

## Despliegue
* **Repositorio en GitHub:** `https://github.com/Juan-3-punto-14-16/practica7-react-peliculas`
* **Aplicación en Netlify:** `https://practica7-react.netlify.app/`

## Conclusiones
* **Moy Alejandro Fernández Hernández:** Este proyecto me ayudó bastante a poner en práctica todo lo visto en clase, detectar errores sobre la marcha y reafirmar realmente lo aprendido. Además, me gustó mucho la dinámica de trabajo en equipo, ya que logramos organizarnos bien desde el inicio, resolver los detalles sin fricciones y sacar todo adelante en tiempo y forma.

* **César Emanuel Hernández Pérez:** Con esta práctica aprendí nuevas herramientas con las que puedo desarrollar una página web, esta vez con React, me gusta la idea de programarlo y armarlo en trozos, siento que al final tienes una forma mucho más estructurada y cómoda de ver el proyecto, en si me gusto mucha la forma en la que se fue trabajando y el uso que se le dio a esta herramienta, que si bien al inicio como siempre por ser nueva me pareció un poco difícil ya que no tenía idea de cómo es que funcionaba, pero conforme iba viendo el video y se iba trabajando en la pagina me pude dar una idea mucho más amplia de cómo es que se usa y cómo se va conectando.

* **Yara Susana Vera Godínez:** Al trabajar en esta práctica logré ver que el usar algunas herramientas, como Github, facilitan el trabajar en equipo, ya que te ayudan a unir partes del proyecto y verificar que no choquen entre ellas. Igual el usar React me ayudó a ver otra forma de armar un proyecto, a dividirlo en componentes que se pueden reutilizar. Todo esto es nuevo y me dejó un gran aprendizaje, creo que aún puedo aprender más, porque sí me parecen herramientas interesantes de implementar.

* **Juan Pablo Valladolid Ramirez:** Gracias a esta práctica aprendí una nueva forma de programar una página web: utilizando React. Me parece muy interesante como su paradigma consiste en programar por componentes, es decir, lo que haces es armar la página pedacito por pedacito (componente por componente), en vez de tener un archivo que representa una página del sitio web. Es algo super modular, y me resulta bastante fascinante como se inspiraron en el principio de las funciones, porque a final de cuentas los componentes son literalmente una función que retorna un pedazo de una vista. Me resultó una práctica bastante enriquecedora y estoy bastante seguro de que quiero empaparme más de React en un futuro.
