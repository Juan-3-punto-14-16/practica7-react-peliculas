# Práctica 7 - App de películas con React

## Integrantes
* **Moisés Alejandro Fernández Hernández** – Cliente HTTP (`httpClient`), página principal (`LandingPage`), cuadrícula de películas (`MovieGrid`), tarjeta (`MovieCard`) y pie de página.
* **César Emanuel Hernández Pérez** – Diseño responsivo y hojas de estilo CSS de los componentes y vistas.
* **Yara Susana Vera Godínez** – Enrutamiento (`AppRouter`), vista de detalle (`MovieDetails`), helper de imágenes y despliegue en Netlify.
* **Juan Pablo Valladolid Ramirez** – Configuración del entorno base, repositorio en GitHub, gestión de variables de entorno y documentación.

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
* **Repositorio en GitHub:** `https://github.com/Juan-3-punto-14-16/practica7-react-peliculas.git`
* **Aplicación en Netlify:** `PENDIENTE`

## Conclusiones
* **Moy Alejandro Fernández Hernández:** X
* **César Emanuel Hernández Pérez:** X
* **Yara Susana Vera Godínez:** X
* **Juan Pablo Valladolid Ramirez:** X