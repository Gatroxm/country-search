# Country Search

Country Search es una aplicación web que permite buscar información sobre países utilizando la API de RestCountries. La aplicación proporciona detalles como el nombre común y oficial del país, la región, la capital, el área, y las monedas utilizadas. También muestra un mapa del país utilizando Google Maps.

## Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Tecnologías](#tecnologías)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Características

- **Búsqueda de Países**: Permite buscar información de un país por nombre.
- **Información Detallada**: Muestra el nombre común y oficial, región, capital, área y monedas del país.
- **Integración de Mapas**: Muestra un mapa del país utilizando Google Maps.
- **Responsive Design**: La interfaz está optimizada para dispositivos móviles y de escritorio.

## Instalación

Sigue estos pasos para clonar y configurar el proyecto en tu entorno local:

1. **Clona el repositorio**:

   ```bash
   git clone https://github.com/Gatroxm/country-search.git
   ```

2. **Navega al directorio del proyecto**:

   ```bash
   cd country-search
   ```

3. **Instala las dependencias**:

   ```bash
   npm install
   ```

4. **Inicia el servidor de desarrollo**:

   ```bash
   ng serve
   ```

   Abre tu navegador y navega a `http://localhost:4200` para ver la aplicación en acción.

## Uso

1. **Buscar un País**: Ingresa el nombre del país en el campo de búsqueda y haz clic en el botón "Buscar".
2. **Ver Información**: La información sobre el país se mostrará a la derecha, incluyendo un mapa y detalles adicionales.
3. **Ver Mapa**: El mapa del país se mostrará en un iframe utilizando Google Maps.

## Tecnologías

- **Angular 17.x**: Framework utilizado para construir la aplicación.
- **RestCountries API**: API para obtener información sobre los países.
- **Google Maps**: API para mostrar mapas (integrada a través de un iframe).
- **Bootstrap**: Framework CSS para diseño responsive.

## Estructura del Proyecto

```bash
country-search/ │ ├── src/ │ ├── app/ │ │ ├── country-search/ │ │ │ ├── country-search.component.ts │ │ │ ├── country-search.component.html │ │ │ ├── country-search.component.css │ │ │ └── country-search.component.spec.ts │ │ ├── services/ │ │ │ └── country.service.ts │ │ ├── pipes/ │ │ │ └── safe-url.pipe.ts │ │ ├── app.config.ts │ │ ├── app.config.server.ts │ │ ├── app.routes.ts │ │ ├── main.server.ts │ │ └── main.ts │ ├── assets/ │ └── index.html ├── .gitignore ├── package.json └── README.md
```

- **`country-search.component.ts`**: Componente principal para la búsqueda y visualización de países.
- **`country.service.ts`**: Servicio para interactuar con la API de RestCountries.
- **`safe-url.pipe.ts`**: Pipe para manejar URLs seguras para los iframes.
- **`app.config.ts`** y **`app.config.server.ts`**: Configuración de la aplicación para el entorno de cliente y servidor.
- **`app.routes.ts`**: Configuración de rutas.
- **`main.server.ts`** y **`main.ts`**: Archivos de entrada para la aplicación.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir, por favor sigue estos pasos:

1. **Haz un Fork del Repositorio**.
2. **Crea una Rama para tu Feature** (`git checkout -b feature/nueva-caracteristica`).
3. **Haz un Commit de tus Cambios** (`git commit -am 'Añadida nueva característica'`).
4. **Haz un Push a la Rama** (`git push origin feature/nueva-caracteristica`).
5. **Crea un Pull Request**.

## Licencia

Este proyecto está licenciado bajo la Licencia del Autor. Todos los derechos reservados. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## Contacto

Si tienes alguna pregunta o necesitas asistencia adicional, no dudes en contactarme:

- **Nombre**: [Gustavo Adolfo Muñoz Reyes]
- **Correo Electrónico**: [tavoxpau@gmail.com]
- **GitHub**: [[Gatroxm](https://github.com/Gatroxm)]
- **Portafolio**: [https://gatroxm.github.io/](https://gatroxm.github.io/)
