# Prompt para Mejorar el Codigo Base

Copia y pega el contenido del bloque de abajo en un asistente de IA (Claude, ChatGPT)
para obtener un ZIP con el proyecto completo y arrancable.

Si preferis trabajar en tu editor con un agente local (Claude Code, Cursor, Copilot), usa `AGENTS.md` en vez de este archivo: dice lo mismo pero para que escriba los archivos en disco.

## Las dos reglas que no se negocian

1. **Completa el boilerplate.** Todo lo que el proyecto necesita para compilar y arrancar: manifiesto de dependencias, punto de entrada, configuracion, capa de interfaz, y las capas del patron arquitectonico declarado. Eso es andamiaje y es tu trabajo.
2. **NO resuelvas el reto.** Los entregables de las fases son el trabajo de la persona. El hueco pedagogico se deja como esta: el proyecto arranca, pero lo que el reto pide implementar NO esta implementado.

Dicho de otra forma: si algo impide compilar, arreglalo. Si algo es logica de negocio incompleta, validaciones ausentes, un secreto hardcodeado o un patron mejorable, dejalo exactamente como esta — es lo que la persona tiene que encontrar.

## Lo que le falta a este proyecto

Esto NO lo tenes que adivinar: salio de comparar el proyecto contra la arquitectura declarada del reto y de un analisis estatico del codigo. Completalo TODO.

### Referencias colgando en el codigo que si esta

Cada una rompe la compilacion:

- `src/app/core/services/NavigationService.ts` — `INavigationAware.push`: Se invoca `push` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/services/NavigationService.ts` — `INavigationAware.indexOf`: Se invoca `indexOf` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/core/services/NavigationService.ts` — `INavigationAware.splice`: Se invoca `splice` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/navigation/app-navigator.ts` — `INavigationAware.push`: Se invoca `push` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/navigation/app-navigator.ts` — `INavigationAware.indexOf`: Se invoca `indexOf` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/navigation/app-navigator.ts` — `INavigationAware.splice`: Se invoca `splice` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `src/app/navigation/app-navigator.ts` — `INavigationAware.forEach`: Se invoca `forEach` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- `package.json` — `@capacitor/storage@6.0.0`: @capacitor/storage declara la version 6.0.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.
- `package.json` — `typescript@5.4.0`: typescript declara la version 5.4.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

## Como saber que terminaste

```bash
npm install && npm run build
```

Ese comando corriendo sin errores es la definicion de "listo".

---

```
## Briefing del reto (autoridad)
Este bloque manda sobre los archivos adjuntos. El stack y el rol salen de AQUÍ, no de un topic genérico ni de markdown placeholder.

### Perfil
Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced

### Brecha de conocimiento
Estructura modulos, navegacion y acceso a capacidades del dispositivo sin acoplar la UI al plugin

### Misión / candidato
Armar el esqueleto de la app de campo

### Datos adicionales
Candidato con experiencia en hibridos

### Reto
- Tema: App híbrida con Ionic
- Seniority: advanced-l2
- Tipo: practical
- Título: Esqueleto de la App de Campo
- Tiempo estimado: 8 horas

### Fases (trabajo del HUMANO — PROHIBIDO completarlas)
No implementes estos entregables. Dejalos como hueco pedagógico. El asistente solo materializa el proyecto arrancable para que el participante pueda trabajar.
- Fase 1: Definición de Módulos — objetivo: Identificar y definir los módulos necesarios para la aplicación. — entregable (NO resolver): Documento que describe los módulos identificados, sus responsabilidades y dependencias.
- Fase 2: Implementación de la Navegación — objetivo: Implementar la navegación entre módulos sin acoplar la UI a los plugins. — entregable (NO resolver): Servicio de navegación abstracto que permite la transición entre módulos.
- Fase 3: Acceso a Capacidades del Dispositivo — objetivo: Implementar el acceso a capacidades del dispositivo sin acoplar la UI a los plugins. — entregable (NO resolver): Servicios abstractos para acceder a las capacidades del dispositivo.

Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 0 — ¿Esto es un proyecto o una carcasa?
Antes de extraer archivos, leé el Briefing (si está) y diagnosticá el adjunto.

Es CARCASA si ocurre CUALQUIERA de estas:
- No hay manifiesto de dependencias del stack del briefing (manifest.json de VTEX IO / package.json / pom.xml / build.gradle / requirements.txt / go.mod / *.tf / *.csproj, según corresponda)
- Hay un "binario" que en realidad es un comentario ("no puede ser mostrado como texto plano", placeholder .fig/.docx vacío)
- Los markdowns ya completan entregables de fases posteriores ("se implementó fade-in", lista de áreas ya resuelta)

Si es CARCASA:
- MATERIALIZÁ un proyecto que arranca en el stack del briefing (VTEX IO Store Framework, Angular, Terraform, pytest, Nest, etc.). Incluí manifiesto, punto de entrada y capa de interfaz reales.
- NO copies los markdowns de "solución" como si fueran el producto. Son ruido de generación.
- NO resuelvas las fases del briefing (están marcadas PROHIBIDO). Dejá el hueco pedagógico: el flujo existe, las microinteracciones/calidad/infra que el reto pide NO están hechas.
- Después seguí al PASO 5 (ZIP).

Si es un proyecto REAL (manifiesto + código que compila o arranca):
- Seguí PASO 1 en adelante. 🔴 compilación sí. 🟡 pedagógico no.

PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación, placeholders o binarios fake, NO la reproduzcas:
aplicá PASO 0 (materializar el proyecto del briefing). Reproducir la carcasa es un fallo.
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:

// === ARCHIVO: package.json ===
{
  "name": "field-agent-app",
  "version": "0.0.1",
  "private": true,
  "scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build",
    "watch": "ng build --watch --configuration development",
    "test": "ng test",
    "lint": "ng lint",
    "ionic:build": "ionic build",
    "ionic:serve": "ionic serve",
    "capacitor:add:android": "capacitor add android",
    "capacitor:copy": "capacitor copy",
    "capacitor:sync": "capacitor sync",
    "capacitor:open:android": "capacitor open android"
  },
  "dependencies": {
    "@angular/animations": "19.0.0",
    "@angular/common": "19.0.0",
    "@angular/compiler": "19.0.0",
    "@angular/core": "19.0.0",
    "@angular/forms": "19.0.0",
    "@angular/platform-browser": "19.0.0",
    "@angular/platform-browser-dynamic": "19.0.0",
    "@angular/router": "19.0.0",
    "@capacitor/app": "6.0.0",
    "@capacitor/camera": "6.0.0",
    "@capacitor/core": "6.0.0",
    "@capacitor/geolocation": "6.0.0",
    "@capacitor/storage": "6.0.0",
    "@ionic/angular": "8.0.0",
    "@ionic/core": "8.0.0",
    "rxjs": "7.8.0",
    "tslib": "2.6.2",
    "zone.js": "0.15.0"
  },
  "devDependencies": {
    "@angular-devkit/build-angular": "19.0.0",
    "@angular-eslint/builder": "19.0.0",
    "@angular-eslint/eslint-plugin": "19.0.0",
    "@angular-eslint/eslint-plugin-template": "19.0.0",
    "@angular-eslint/template-parser": "19.0.0",
    "@angular/cli": "19.0.0",
    "@angular/compiler-cli": "19.0.0",
    "@capacitor/cli": "6.0.0",
    "@ionic/angular-toolkit": "11.0.0",
    "@types/jasmine": "5.1.0",
    "@types/node": "20.12.0",
    "eslint": "8.57.0",
    "eslint-plugin-import": "2.29.1",
    "eslint-plugin-jsdoc": "48.2.0",
    "eslint-plugin-prefer-arrow": "1.2.3",
    "jasmine-core": "5.1.0",
    "karma": "6.4.0",
    "karma-chrome-launcher": "3.2.0",
    "karma-coverage": "2.2.0",
    "karma-jasmine": "5.1.0",
    "karma-jasmine-html-reporter": "2.1.0",
    "typescript": "5.4.0"
  },
  "browserslist": [
    "last 1 Chrome version",
    "last 1 Firefox version",
    "last 2 Edge major versions",
    "last 2 Safari major versions",
    "last 2 iOS major versions",
    "last 2 Android major versions"
  ],
  "description": "Aplicación híbrida para agentes de campo construida con Ionic y Angular"
}

// === ARCHIVO: ionic.config.json ===
{
  "name": "field-agent-app",
  "integrations": {
    "capacitor": {}
  },
  "type": "angular",
  "root": "src",
  "sourceMap": false,
  "watchPatterns": [
    "src/**/*",
    "!src/**/*.spec.ts"
  ],
  "npmClient": "npm",
  "projects": {
    "app": {
      "context": "app",
      "source": "src",
      "type": "angular"
    }
  },
  "hooks": {
    "build:after": "npm run capacitor:copy",
    "serve:after": "npm run capacitor:sync"
  }
}

// === ARCHIVO: capacitor.config.ts ===
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.fieldagent.app',
  appName: 'Field Agent App',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    Camera: {
      androidPermissionType: 'CAMERA',
      androidPermissions: ['android.permission.CAMERA', 'android.permission.READ_EXTERNAL_STORAGE'],
      iosPermissionType: 'photoLibraryAddOnly'
    },
    Geolocation: {
      androidPermissions: ['android.permission.ACCESS_COARSE_LOCATION', 'android.permission.ACCESS_FINE_LOCATION'],
      iosLocationUsageDescription: 'La aplicación necesita acceder a tu ubicación para registrar la posición del agente'
    },
    Storage: {
      iosKeychainAccessGroup: 'com.fieldagent.app.storage',
      androidPermissions: ['android.permission.WRITE_EXTERNAL_STORAGE']
    },
    App: {
      androidLifecycle: {
        onStart: 'onAppStart',
        onResume: 'onAppResume'
      }
    }
  },
  server: {
    hostname: 'localhost',
    androidScheme: 'https',
    iosScheme: 'capacitor'
  },
  android: {
    path: 'android',
    flavor: 'dev',
    versionCode: 1,
    versionName: '0.0.1'
  },
  ios: {
    path: 'ios',
    scheme: 'App',
    bundleId: 'com.fieldagent.app',
    targets: {
      App: 'App'
    }
  }
};

export default config;

// === ARCHIVO: src/app/core/abstractions/INavigationService.ts ===
import { Type } from '@angular/core';
import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de navegación que actúa como Mediator.
 * Desacopla los componentes de Angular de la implementación concreta de navegación,
 * permitiendo transiciones entre rutas sin depender directamente de Angular Router.
 */
export interface INavigationService {
  /**
   * Navega a la ruta especificada con los parámetros proporcionados.
   * @param route Ruta de destino como array de segmentos (ej: ['/auth', 'login']).
   * @param params Parámetros opcionales para la ruta (query params o state).
   * @returns Promise<void> que se resuelve cuando la navegación se completa.
   */
  navigateTo(route: string[], params?: { [key: string]: any }): Promise<void>;

  /**
   * Navega hacia atrás en el historial de navegación.
   * @param defaultRoute Ruta por defecto si no hay historial (ej: ['/home']).
   * @returns Promise<void> que se resuelve cuando la navegación se completa.
   */
  navigateBack(defaultRoute: string[]): Promise<void>;

  /**
   * Obtiene la ruta actual como un Observable.
   * @returns Observable<string[]> que emite la ruta actual cada vez que cambia.
   */
  currentRoute(): Observable<string[]>;

  /**
   * Registra un componente para ser notificado cuando ocurra una navegación.
   * @param component Componente que implementa la interfaz INavigationAware.
   */
  registerNavigationAware(component: INavigationAware): void;

  /**
   * Elimina el registro de un componente para no recibir más notificaciones.
   * @param component Componente registrado previamente.
   */
  unregisterNavigationAware(component: INavigationAware): void;
}

/**
 * Interfaz que deben implementar los componentes que deseen ser notificados sobre eventos de navegación.
 */
export interface INavigationAware {
  /**
   * Método llamado cuando la navegación hacia una nueva ruta está a punto de ocurrir.
   * @param route Ruta de destino.
   */
  onNavigationStart(route: string[]): void;

  /**
   * Método llamado cuando la navegación se completa exitosamente.
   * @param route Ruta de destino.
   */
  onNavigationSuccess(route: string[]): void;

  /**
   * Método llamado cuando la navegación falla.
   * @param route Ruta que se intentó alcanzar.
   * @param error Error que causó el fallo.
   */
  onNavigationError(route: string[], error: Error): void;
}

// === ARCHIVO: src/app/core/abstractions/ICameraService.ts ===
import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de cámara que actúa como Adapter.
 * Encapsula el acceso a la cámara del dispositivo (Capacitor Camera Plugin)
 * proporcionando una API consistente y desacoplada de la implementación concreta.
 */
export interface ICameraService {
  /**
   * Solicita permiso para acceder a la cámara del dispositivo.
   * @returns Promise<boolean> que se resuelve con true si el permiso fue concedido.
   */
  requestPermission(): Promise<boolean>;

  /**
   * Toma una foto utilizando la cámara del dispositivo.
   * @param options Opciones de configuración para la captura (calidad, dirección, etc.).
   * @returns Promise<CameraPhoto> con los datos de la foto capturada.
   * @throws CameraPermissionError si el permiso no fue concedido.
   * @throws CameraUnavailableError si la cámara no está disponible.
   */
  takePhoto(options?: CameraOptions): Promise<CameraPhoto>;

  /**
   * Obtiene fotos de la galería del dispositivo.
   * @param options Opciones de configuración para la selección.
   * @returns Promise<CameraPhoto[]> con las fotos seleccionadas.
   * @throws GalleryPermissionError si el permiso no fue concedido.
   */
  pickFromGallery(options?: GalleryOptions): Promise<CameraPhoto[]>;

  /**
   * Observa el estado de disponibilidad de la cámara.
   * @returns Observable<boolean> que emite true cuando la cámara está disponible.
   */
  cameraAvailability(): Observable<boolean>;

  /**
   * Limpia la caché de fotos temporales generadas por el servicio.
   * @returns Promise<void> que se resuelve cuando la limpieza se completa.
   */
  cleanupTemporaryPhotos(): Promise<void>;
}

/**
 * Opciones de configuración para la captura de fotos.
 */
export interface CameraOptions {
  quality?: number;
  allowEditing?: boolean;
  resultType?: 'base64' | 'uri' | 'dataUrl';
  saveToGallery?: boolean;
  direction?: 'front' | 'rear';
  width?: number;
  height?: number;
}

/**
 * Opciones de configuración para la selección desde la galería.
 */
export interface GalleryOptions {
  maximumImagesCount?: number;
  quality?: number;
}

/**
 * Estructura que representa una foto capturada o seleccionada.
 */
export interface CameraPhoto {
  /**
   * Base64 de la imagen si resultType es 'base64' o 'dataUrl'.
   */
  base64Data?: string;

  /**
   * URI de la imagen si resultType es 'uri'.
   */
  webPath?: string;

  /**
   * Path del archivo en el sistema de archivos del dispositivo.
   */
  path?: string;

  /**
   * Formato de la imagen (jpeg, png).
   */
  format: string;

  /**
   * Exif data si está disponible.
   */
  exif?: any;
}

/**
 * Error lanzado cuando no se concede permiso para acceder a la cámara.
 */
export class CameraPermissionError extends Error {
  constructor(message: string = 'Permission denied for camera access') {
    super(message);
    this.name = 'CameraPermissionError';
  }
}

/**
 * Error lanzado cuando la cámara no está disponible.
 */
export class CameraUnavailableError extends Error {
  constructor(message: string = 'Camera is not available') {
    super(message);
    this.name = 'CameraUnavailableError';
  }
}

/**
 * Error lanzado cuando no se concede permiso para acceder a la galería.
 */
export class GalleryPermissionError extends Error {
  constructor(message: string = 'Permission denied for gallery access') {
    super(message);
    this.name = 'GalleryPermissionError';
  }
}

// === ARCHIVO: src/app/core/abstractions/IGeolocationService.ts ===
import { Observable } from 'rxjs';

/**
 * Interfaz abstracta para el servicio de geolocalización que actúa como Adapter.
 * Encapsula el acceso al GPS del dispositivo (Capacitor Geolocation Plugin)
 * proporcionando una API consistente y desacoplada de la implementación concreta.
 */
export interface IGeolocationService {
  /**
   * Solicita permiso para acceder a la ubicación del dispositivo.
   * @returns Promise<PermissionStatus> con el estado del permiso.
   */
  requestPermission(): Promise<PermissionStatus>;

  /**
   * Obtiene la posición actual del dispositivo.
   * @param options Opciones de configuración para la obtención de la posición.
   * @returns Promise<GeolocationPosition> con la posición actual.
   * @throws GeolocationPermissionError si el permiso no fue concedido.
   * @throws GeolocationUnavailableError si el GPS no está disponible.
   * @throws TimeoutError si la operación excede el tiempo de espera.
   */
  getCurrentPosition(options?: PositionOptions): Promise<GeolocationPosition>;

  /**
   * Observa la posición del dispositivo en tiempo real.
   * @param options Opciones de configuración para el watch.
   * @returns Observable<GeolocationPosition> que emite la posición cada vez que cambia.
   */
  watchPosition(options?: PositionOptions): Observable<GeolocationPosition>;

  /**
   * Detiene la observación de la posición.
   */
  clearWatch(): void;

  /**
   * Verifica si el GPS está habilitado en el dispositivo.
   * @returns Promise<boolean> que se resuelve con true si el GPS está habilitado.
   */
  isGpsEnabled(): Promise<boolean>;

  /**
   * Obtiene el estado del permiso de ubicación.
   * @returns Promise<PermissionStatus> con el estado actual del permiso.
   */
  checkPermission(): Promise<PermissionStatus>;
}

/**
 * Opciones de configuración para la obtención de la posición.
 */
export interface PositionOptions {
  enableHighAccuracy?: boolean;
  timeout?: number;
  maximumAge?: number;
}

/**
 * Estructura que representa la posición geográfica del dispositivo.
 */
export interface GeolocationPosition {
  /**
   * Coordenadas de la posición.
   */
  coords: {
    latitude: number;
    longitude: number;
    accuracy: number;
    altitude?: number;
    altitudeAccuracy?: number;
    heading?: number;
    speed?: number;
  };

  /**
   * Timestamp de cuando se obtuvo la posición.
   */
  timestamp: number;
}

/**
 * Tipos de estado de permiso para geolocalización.
 */
export type PermissionStatus = 'prompt' | 'granted' | 'denied';

/**
 * Error lanzado cuando no se concede permiso para acceder a la ubicación.
 */
export class GeolocationPermissionError extends Error {
  constructor(message: string = 'Permission denied for geolocation access') {
    super(message);
    this.name = 'GeolocationPermissionError';
  }
}

/**
 * Error lanzado cuando el GPS no está disponible.
 */
export class GeolocationUnavailableError extends Error {
  constructor(message: string = 'Geolocation is not available') {
    super(message);
    this.name = 'GeolocationUnavailableError';
  }
}

/**
 * Error lanzado cuando la operación excede el tiempo de espera.
 */
export class TimeoutError extends Error {
  constructor(message: string = 'Operation timed out') {
    super(message);
    this.name = 'TimeoutError';
  }
}

// === ARCHIVO: tsconfig.json ===
{
  "compileOnSave": false,
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "sourceMap": true,
    "declaration": false,
    "moduleResolution": "node",
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "target": "es2015",
    "typeRoots": [
      "node_modules/@types"
    ],
    "lib": [
      "es2018",
      "dom"
    ]
  }
}

// === ARCHIVO: src/main.ts ===
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { enableProdMode } from '@angular/core';
import { INavigationService } from './app/core/abstractions/INavigationService';
import { ICameraService } from './app/core/abstractions/ICameraService';
import { IGeolocationService } from './app/core/abstractions/IGeolocationService';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
 .catch(err => console.error(err));

class AppBootstrap {
  private navigationService: INavigationService;
  private cameraService: ICameraService;
  private geolocationService: IGeolocationService;

  constructor(
    navigationService: INavigationService,
    cameraService: ICameraService,
    geolocationService: IGeolocationService
  ) {
    this.navigationService = navigationService;
    this.cameraService = cameraService;
    this.geolocationService = geolocationService;
  }

  async initializeApp() {
    try {
      await this.cameraService.requestPermission();
      await this.geolocationService.requestPermission();
      this.navigationService.navigateTo(['/home'], {});
    } catch (error) {
      console.error('Error initializing app:', error);
    }
  }
}

const appBootstrap = new AppBootstrap(
  new NavigationService(),
  new CameraService(),
  new GeolocationService()
);

appBootstrap.initializeApp();

// === ARCHIVO: src/app/core/abstractions/IStorageService.ts ===
import { Observable } from 'rxjs';

export interface IStorageService {
  get(key: string): Promise<string | null>;
  set(key: string, value: string): Promise<void>;
  remove(key: string): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<string[]>;
  values(): Promise<string[]>;
  entries(): Promise<[string, string][]>;
  isAvailable(): Observable<boolean>;
}

// === ARCHIVO: src/app/core/services/NavigationService.ts ===
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { INavigationService } from '../abstractions/INavigationService';
import { INavigationAware } from '../abstractions/INavigationAware';

@Injectable({
  providedIn: 'root'
})
export class NavigationService implements INavigationService {
  private navigationSubject = new Subject<string[]>();
  private navigationAwareComponents: INavigationAware[] = [];

  navigateTo(route: string[], params?: { [key: string]: any }): void {
    // Implement navigation logic here
    this.navigationSubject.next(route);
  }

  navigateBack(defaultRoute: string[]): Promise<void> {
    // Implement navigation back logic here
    return Promise.resolve();
  }

  currentRoute(): Observable<string[]> {
    return this.navigationSubject.asObservable();
  }

  registerNavigationAware(component: INavigationAware): void {
    this.navigationAwareComponents.push(component);
  }

  unregisterNavigationAware(component: INavigationAware): void {
    const index = this.navigationAwareComponents.indexOf(component);
    if (index > -1) {
      this.navigationAwareComponents.splice(index, 1);
    }
  }
}

// === ARCHIVO: src/app/core/services/CameraService.ts ===
import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { ICameraService } from '../abstractions/ICameraService';
import { CameraOptions, GalleryOptions, CameraPhoto } from '../abstractions/ICameraService';
import { CameraPermissionError, CameraUnavailableError, GalleryPermissionError } from '../abstractions/ICameraService';

const { Camera } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class CameraService implements ICameraService {
  async requestPermission(): Promise<boolean> {
    try {
      const status = await Camera.checkPermissions();
      if (status.camera === 'denied') {
        throw new CameraPermissionError();
      }
      return status.camera === 'granted';
    } catch (error) {
      throw new CameraPermissionError(error.message);
    }
  }

  async takePhoto(options?: CameraOptions): Promise<CameraPhoto> {
    try {
      const result = await Camera.getPhoto(options);
      return {
        base64: result.base64,
        webPath: result.webPath,
        width: result.width,
        height: result.height
      };
    } catch (error) {
      throw new CameraUnavailableError(error.message);
    }
  }

  async pickFromGallery(options?: GalleryOptions): Promise<CameraPhoto[]> {
    try {
      const result = await Camera.pickPhotos(options);
      return result.photos.map(photo => ({
        base64: photo.base64,
        webPath: photo.webPath,
        width: photo.width,
        height: photo.height
      }));
    } catch (error) {
      throw new GalleryPermissionError(error.message);
    }
  }

  cameraAvailability(): Observable<boolean> {
    return new Observable(observer => {
      Camera.addListener('cameraStatusChange', status => {
        observer.next(status.available);
      });
    });
  }

  async cleanupTemporaryPhotos(): Promise<void> {
    // Implement cleanup logic here
  }
}

// === ARCHIVO: src/app/core/services/GeolocationService.ts ===
import { Injectable } from '@angular/core';
import { IGeolocationService } from '../abstractions/IGeolocationService';
import { Geolocation } from '@capacitor/geolocation';
import { GeolocationPosition, PermissionStatus, GeolocationPermissionError, GeolocationUnavailableError, TimeoutError } from '../abstractions/IGeolocationService';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService implements IGeolocationService {
  private currentPosition$: Observable<GeolocationPosition>;
  private watchId: number;

  constructor() {}

  async requestPermission(): Promise<PermissionStatus> {
    try {
      const { status } = await Geolocation.requestPermission();
      return status as PermissionStatus;
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  async getCurrentPosition(options?: PositionOptions): Promise<GeolocationPosition> {
    try {
      const { coords } = await Geolocation.getCurrentPosition(options);
      return this.mapCoordsToPosition(coords);
    } catch (error) {
      if (error.code === Geolocation.PERMISSION_DENIED) {
        throw new GeolocationPermissionError();
      } else if (error.code === Geolocation.POSITION_UNAVAILABLE) {
        throw new GeolocationUnavailableError();
      } else if (error.code === Geolocation.TIMEOUT) {
        throw new TimeoutError();
      }
      throw error;
    }
  }

  watchPosition(options?: PositionOptions): Observable<GeolocationPosition> {
    this.currentPosition$ = new Observable<GeolocationPosition>(observer => {
      this.watchId = Geolocation.watchPosition(options).subscribe({
        next: position => observer.next(this.mapCoordsToPosition(position.coords)),
        error: error => observer.error(error)
      });
    });
    return this.currentPosition$;
  }

  clearWatch(): void {
    if (this.watchId) {
      Geolocation.clearWatch({ id: this.watchId }).then(() => this.watchId = null);
    }
  }

  async isGpsEnabled(): Promise<boolean> {
    try {
      const { enabled } = await Geolocation.checkPermissions();
      return enabled === 'granted';
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  async checkPermission(): Promise<PermissionStatus> {
    try {
      const { status } = await Geolocation.checkPermissions();
      return status as PermissionStatus;
    } catch (error) {
      throw new GeolocationPermissionError();
    }
  }

  private mapCoordsToPosition(coords: GeolocationCoordinates): GeolocationPosition {
    return {
      timestamp: coords.timestamp,
      coords: {
        latitude: coords.latitude,
        longitude: coords.longitude,
        altitude: coords.altitude,
        accuracy: coords.accuracy,
        altitudeAccuracy: coords.altitudeAccuracy,
        heading: coords.heading,
        speed: coords.speed
      }
    };
  }
}

// === ARCHIVO: src/app/core/services/StorageService.ts ===
import { Injectable } from '@angular/core';
import { IStorageService } from '../abstractions/IStorageService';
import { Storage } from '@capacitor/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService implements IStorageService {
  constructor() {}

  async set(key: string, value: string): Promise<void> {
    try {
      await Storage.set({ key, value });
    } catch (error) {
      console.error('Error setting value in storage', error);
      throw error;
    }
  }

  async get(key: string): Promise<string | null> {
    try {
      const { value } = await Storage.get({ key });
      return value;
    } catch (error) {
      console.error('Error getting value from storage', error);
      throw error;
    }
  }

  async remove(key: string): Promise<void> {
    try {
      await Storage.remove({ key });
    } catch (error) {
      console.error('Error removing value from storage', error);
      throw error;
    }
  }

  async clear(): Promise<void> {
    try {
      await Storage.clear();
    } catch (error) {
      console.error('Error clearing storage', error);
      throw error;
    }
  }
}

// === ARCHIVO: src/app/app.config.ts ===
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicModule } from '@ionic/angular';
import { ServiceWorkerModule } from '@angular/service-workers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// === ARCHIVO: src/app/app.routes.ts ===
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './features/auth/auth.guard';
import { HomePage } from './features/field-agent/home.page';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./features/auth/auth.module').then(m => m.AuthModule) },
  { path: 'home', component: HomePage, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

// === ARCHIVO: src/app/app.component.ts ===
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { INavigationService } from './core/abstractions/INavigationService';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navigationService: INavigationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.navigationService.navigateTo(['/home']).catch(error => console.error('Navigation error:', error));
    });
  }
}

// === ARCHIVO: src/app/features/auth/auth.module.ts ===
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginPage } from './login.page';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [LoginPage],
  imports: [CommonModule, FormsModule, IonicModule, AuthRoutingModule],
  providers: [AuthService]
})
export class AuthModule {}

// === ARCHIVO: src/app/features/auth/login.page.ts ===
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { INavigationService } from 'src/app/core/abstractions/INavigationService';
import { AuthService } from 'src/app/core/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  error: string;

  constructor(
    private formBuilder: FormBuilder,
    private navigationService: INavigationService,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  async onLogin() {
    if (this.loginForm.valid) {
      try {
        await this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
        this.navigationService.navigateTo(['/field-agent/home']);
      } catch (error) {
        this.error = error.message || 'Failed to login. Please try again.';
      }
    }
  }
}

// === ARCHIVO: src/app/features/auth/login.page.html ===
<ion-header>
  <ion-toolbar>
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-item>
    <ion-label position="stacked">Username</ion-label>
    <ion-input formControlName="username" type="email"></ion-input>
  </ion-item>
  <ion-item>
    <ion-label position="stacked">Password</ion-label>
    <ion-input formControlName="password" type="password"></ion-input>
  </ion-item>
  <ion-button expand="full" (click)="onLogin()">Login</ion-button>
  <ion-text color="danger" *ngIf="error">{{ error }}</ion-text>
</ion-content>

// === ARCHIVO: src/app/features/auth/login.page.scss ===
ion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

ion-item {
  margin-bottom: 10px;
}

ion-button {
  margin-top: 20px;
}

ion-text {
  margin-top: 10px;
  font-size: 14px;
}

ion-label {
  font-weight: bold;
}

ion-input {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  font-size: 16px;
}

ion-header {
  background-color: #488aff;
  color: white;
}

ion-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-title {
  font-size: 20px;
  font-weight: bold;
}

ion-content {
  background-color: #f4f4f4;
}

ion-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

ion-button:hover {
  background-color: #45a049;
}

ion-button:active {
  background-color: #388e3c;
}

ion-text {
  color: red;
  font-size: 14px;
  font-weight: bold;
}

ion-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

ion-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

ion-input {
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

ion-header {
  background-color: #4caf50;
  color: white;
  padding: 10px;
}

ion-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

ion-title {
  font-size: 20px;
  font-weight: bold;
  color: white;
}

ion-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: #f4f4f4;
}

ion-button {
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

ion-button:hover {
  background-color: #45a049;
}

ion-button:active {
  background-color: #388e3c;
}

ion-text {
  color: red;
  font-size: 14px;
  font-weight: bold;
}

ion-item {
  border-bottom: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

ion-label {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

ion-input {
  font-size: 16px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

// === ARCHIVO: src/app/features/field-agent/field-agent.module.ts ===
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage],
  providers: []
})
export class FieldAgentModule {}

// === ARCHIVO: src/app/features/field-agent/home.page.ts ===
import { Component } from '@angular/core';
import { INavigationService } from 'src/app/core/abstractions/INavigationService';
import { ICameraService } from 'src/app/core/abstractions/ICameraService';
import { IGeolocationService } from 'src/app/core/abstractions/IGeolocationService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  constructor(
    private navigationService: INavigationService,
    private cameraService: ICameraService,
    private geolocationService: IGeolocationService
  ) {}

  navigateToDetails() {
    this.navigationService.navigateTo(['details']).subscribe();
  }

  takePhoto() {
    this.cameraService.requestPermission().then((granted) => {
      if (granted) {
        this.cameraService.takePhoto().then((photo) => {
          console.log('Photo taken:', photo);
        }).catch((error) => {
          console.error('Error taking photo:', error);
        });
      } else {
        console.error('Camera permission denied');
      }
    });
  }

  getLocation() {
    this.geolocationService.requestPermission().then((status) => {
      if (status === 'granted') {
        this.geolocationService.getCurrentPosition().then((position) => {
          console.log('Current position:', position);
        }).catch((error) => {
          console.error('Error getting location:', error);
        });
      } else {
        console.error('Geolocation permission denied');
      }
    });
  }
}

// === ARCHIVO: src/app/features/field-agent/home.page.html ===
<ion-header>
  <ion-toolbar>
    <ion-title>Home</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content>
  <ion-button (click)="navigateToDetails()">Go to Details</ion-button>
  <ion-button (click)="takePhoto()">Take Photo</ion-button>
  <ion-button (click)="getLocation()">Get Location</ion-button>
</ion-content>

// === ARCHIVO: src/app/features/field-agent/home.page.scss ===
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --success-color: #28a745;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #17a2b8;
  --light-color: #f8f9fa;
  --dark-color: #343a40;
}

.home-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--light-color);
  color: var(--dark-color);
}

.home-page h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.home-page p {
  font-size: 1rem;
  margin-bottom: 2rem;
}

.home-page button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  background-color: var(--primary-color);
  color: var(--light-color);
  font-size: 1rem;
  cursor: pointer;
}

.home-page button:hover {
  background-color: var(--secondary-color);
}

// === ARCHIVO: src/app/shared/components/PhotoCapture.component.ts ===
import { Component, OnInit } from '@angular/core';
import { ICameraService } from 'src/app/core/abstractions/ICameraService';
import { CameraPermissionError } from 'src/app/core/abstractions/ICameraService';

@Component({
  selector: 'app-photo-capture',
  template: `<div><button (click)="takePhoto()">Take Photo</button></div>`
})
export class PhotoCaptureComponent implements OnInit {
  private cameraService: ICameraService;

  constructor(cameraService: ICameraService) {
    this.cameraService = cameraService;
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  async takePhoto() {
    try {
      const hasPermission = await this.cameraService.requestPermission();
      if (!hasPermission) {
        throw new CameraPermissionError('Permission denied for camera access');
      }

      const photo = await this.cameraService.takePhoto();
      console.log('Photo taken:', photo);
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }
}

// === ARCHIVO: src/app/shared/components/LocationDisplay.component.ts ===
import { Component, OnInit } from '@angular/core';
import { IGeolocationService } from 'src/app/core/abstractions/IGeolocationService';
import { GeolocationPermissionError } from 'src/app/core/abstractions/IGeolocationService';

@Component({
  selector: 'app-location-display',
  template: `<div>{{ location }}</div>`
})
export class LocationDisplayComponent implements OnInit {
  private geolocationService: IGeolocationService;
  location: string = 'Loading...';

  constructor(geolocationService: IGeolocationService) {
    this.geolocationService = geolocationService;
  }

  ngOnInit(): void {
    this.getCurrentLocation();
  }

  async getCurrentLocation() {
    try {
      const hasPermission = await this.geolocationService.requestPermission();
      if (!hasPermission) {
        throw new GeolocationPermissionError('Permission denied for geolocation access');
      }

      const position = await this.geolocationService.getCurrentPosition();
      this.location = `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`;
    } catch (error) {
      console.error('Error getting location:', error);
      this.location = 'Error getting location';
    }
  }
}

// === ARCHIVO: src/app/navigation/app-navigator.ts ===
import { Injectable } from '@angular/core';
import { INavigationService } from 'src/app/core/abstractions/INavigationService';
import { INavigationAware } from 'src/app/core/abstractions/INavigationAware';
import { NavigationExtras } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppNavigator implements INavigationService {
  private navigationAwareComponents: INavigationAware[] = [];

  constructor() {}

  navigateTo(route: string[], params?: NavigationExtras): void {
    // Implement navigation logic here
    this.notifyNavigationAware('start', route);
    // Simulate navigation
    this.notifyNavigationAware('success', route);
  }

  navigateBack(defaultRoute: string[]): Promise<void> {
    return new Promise((resolve) => {
      // Implement back navigation logic here
      this.notifyNavigationAware('start', defaultRoute);
      // Simulate navigation
      this.notifyNavigationAware('success', defaultRoute);
      resolve();
    });
  }

  currentRoute(): Observable<string[]> {
    // Implement current route logic here
    return new Observable<string[]>(observer => {
      // Simulate current route
      observer.next(['/home']);
      observer.complete();
    });
  }

  registerNavigationAware(component: INavigationAware): void {
    this.navigationAwareComponents.push(component);
  }

  unregisterNavigationAware(component: INavigationAware): void {
    const index = this.navigationAwareComponents.indexOf(component);
    if (index > -1) {
      this.navigationAwareComponents.splice(index, 1);
    }
  }

  private notifyNavigationAware(event: 'start' | 'success' | 'error', route: string[]): void {
    this.navigationAwareComponents.forEach(component => {
      if (event === 'start') {
        component.onNavigationStart(route);
      } else if (event === 'success') {
        component.onNavigationSuccess(route);
      } else if (event === 'error') {
        component.onNavigationError(route, new Error('Navigation error'));
      }
    });
  }
}

// === ARCHIVO: android/app/src/main/AndroidManifest.xml ===
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
  package="com.example.fieldagentapp">

  <uses-permission android:name="android.permission.CAMERA" />
  <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
  <uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
  <uses-permission android:name="android.permission.READ_EXTERNAL_STORAGE" />
  <uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE" />

  <application
    android:allowBackup="true"
    android:dataExtractionRules="@xml/data_extraction_rules"
    android:fullBackupContent="@xml/backup_rules"
    android:icon="@mipmap/ic_launcher"
    android:label="@string/app_name"
    android:roundIcon="@mipmap/ic_launcher_round"
    android:supportsRtl="true"
    android:theme="@style/Theme.FieldAgentApp">
    <activity
      android:name=".MainActivity"
      android:exported="true"
      android:label="@string/app_name"
      android:theme="@style/LaunchTheme">
      <intent-filter>
        <action android:name="android.intent.action.MAIN" />

        <category android:name="android.intent.category.LAUNCHER" />
      </intent-filter>
    </activity>
  </application>

</manifest>
```
