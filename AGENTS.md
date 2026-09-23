# AGENTS.md

Instrucciones para el agente de IA que abra este repositorio (Claude Code, Cursor, Codex, Copilot, Gemini). Se cargan solas: no hay que pegar nada en ningun chat.

## Que es este repositorio

Es el codigo base de un reto de aprendizaje de Pragma: **Esqueleto de la App de Campo**.

| | |
|---|---|
| Tema | App híbrida con Ionic |
| Nivel | advanced-l2 |
| Chapter | Móvil |
| Especialidad | Ionic |
| Stack | TypeScript / Angular 19 |
| Patron arquitectonico | clean architecture con patrón Adapter y Mediator |
| Tiempo estimado | 8 horas |

## Receta del stack

Esqueleto obligatorio:

- `package.json, ionic.config.json y capacitor.config.ts en la raiz`
- `src/main.ts como bootstrap`
- `src/app con las rutas y paginas`
- `src/services con los clientes HTTP`
- `src/models del dominio`

Dependencias:

- @ionic/angular 8
- @angular/core 19
- @angular/router 19
- @capacitor/core 6
- @capacitor/camera 6
- @capacitor/geolocation 6
- @capacitor/storage 6
- @capacitor/app 6
- rxjs 7.8
- tslib 2.6
- zone.js 0.15
- @angular/forms 19

## Tu tarea

Dejar este proyecto en estado **verificable**: que el comando de verificacion corra sin errores. Escribi los archivos en disco, en este repositorio. No generes ZIPs ni archivos adjuntos.

En orden:

1. Corre `npm install && npm run build` y mira que falla.
2. Completa lo que falte de la lista de abajo: manifiesto de dependencias, punto de entrada, capa de interfaz y las capas del patron declarado.
3. Arregla SOLO los errores que impiden compilar o arrancar.
4. Volve a correr `npm install && npm run build` hasta que pase.
5. Pará ahí.

## Regla dura: las fases son trabajo del humano

**PROHIBIDO implementar los entregables de las fases.** El valor del reto esta en que la persona los resuelva. Tu trabajo es que tenga un proyecto que arranca; el hueco pedagogico se queda como esta.

No resuelvas nada de esto:

- **Fase 1 — Definición de Módulos**: Documento que describe los módulos identificados, sus responsabilidades y dependencias.
- **Fase 2 — Implementación de la Navegación**: Servicio de navegación abstracto que permite la transición entre módulos.
- **Fase 3 — Acceso a Capacidades del Dispositivo**: Servicios abstractos para acceder a las capacidades del dispositivo.

Distincion operativa:

- **Arreglar** (si): import faltante, tipo que no existe, dependencia sin declarar, error de sintaxis, archivo referenciado que no existe.
- **No tocar** (no): logica de negocio incompleta, validaciones ausentes, secretos hardcodeados, APIs deprecadas que funcionan, concurrencia insegura, patrones mejorables. Eso es lo que la persona tiene que encontrar.

## Lo que falta y tenes que completar

### 1. Referencias colgando (9)

Salieron de un analisis estatico del codigo que SI esta en el repo. Cada una rompe la compilacion:

- [ ] `src/app/core/services/NavigationService.ts` — `INavigationAware.push`
      Se invoca `push` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/services/NavigationService.ts` — `INavigationAware.indexOf`
      Se invoca `indexOf` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/core/services/NavigationService.ts` — `INavigationAware.splice`
      Se invoca `splice` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/navigation/app-navigator.ts` — `INavigationAware.push`
      Se invoca `push` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/navigation/app-navigator.ts` — `INavigationAware.indexOf`
      Se invoca `indexOf` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/navigation/app-navigator.ts` — `INavigationAware.splice`
      Se invoca `splice` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `src/app/navigation/app-navigator.ts` — `INavigationAware.forEach`
      Se invoca `forEach` sobre `INavigationAware`, pero esa clase no declara ese metodo. Agregalo con su implementacion real, o usa uno de los que si declara.
- [ ] `package.json` — `@capacitor/storage@6.0.0`
      @capacitor/storage declara la version 6.0.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.
- [ ] `package.json` — `typescript@5.4.0`
      typescript declara la version 5.4.0, pero el registry de npm respondio que esa version no existe. Es una version inventada: reemplazala por una version publicada real, o si no se conoce con certeza, usa el mecanismo centralizado del ecosistema (BOM/parent/platform/version catalog) y no declares una version individual.

### Presentes (28)

- `package.json`
- `ionic.config.json`
- `capacitor.config.ts`
- `src/app/core/abstractions/INavigationService.ts`
- `src/app/core/abstractions/ICameraService.ts`
- `src/app/core/abstractions/IGeolocationService.ts`
- `tsconfig.json`
- `src/main.ts`
- `src/app/core/abstractions/IStorageService.ts`
- `src/app/core/services/NavigationService.ts`
- `src/app/core/services/CameraService.ts`
- `src/app/core/services/GeolocationService.ts`
- `src/app/core/services/StorageService.ts`
- `src/app/app.config.ts`
- `src/app/app.routes.ts`
- `src/app/app.component.ts`
- `src/app/features/auth/auth.module.ts`
- `src/app/features/auth/login.page.ts`
- `src/app/features/auth/login.page.html`
- `src/app/features/auth/login.page.scss`
- `src/app/features/field-agent/field-agent.module.ts`
- `src/app/features/field-agent/home.page.ts`
- `src/app/features/field-agent/home.page.html`
- `src/app/features/field-agent/home.page.scss`
- `src/app/shared/components/PhotoCapture.component.ts`
- `src/app/shared/components/LocationDisplay.component.ts`
- `src/app/navigation/app-navigator.ts`
- `android/app/src/main/AndroidManifest.xml`

### Capas del patron declarado

Cada una tiene que existir como directorio real con al menos un archivo. Codigo plano en la raiz no satisface el patron.

- `src/app/core/abstractions`
- `src/app/core/services`
- `src/app/core/config`
- `src/app/features/auth`
- `src/app/features/field-agent`
- `src/app/shared/components`
- `src/app/shared/utils`
- `src/app/navigation`

## Verificacion

```bash
npm install && npm run build
```

Ese comando pasando es la definicion de "terminado" para vos.

## Convenciones que tenes que respetar

- Un solo ecosistema: no declares librerias de otro lenguaje ni mezcles gestores de paquetes.
- Toda libreria que uses tiene que estar declarada en el manifiesto de dependencias.
- Todo import declarado tiene que usarse; todo tipo usado tiene que existir o venir de una dependencia declarada.
- El patron es **clean architecture con patrón Adapter y Mediator**: los contratos (interfaces, puertos) los define la capa interna y los implementa la externa, nunca al revés.
- Los archivos que crees llevan implementacion real, no stubs: sin `TODO`, sin cuerpos vacios, sin `// getters y setters`.

## Contexto del candidato

Sirve para calibrar el nivel del codigo, no para resolver las fases.

- Perfil: Chapter Movil, Especialidad Desarrollador, Tecnología Ionic, Advanced
- Brecha que el reto ataca: Estructura modulos, navegacion y acceso a capacidades del dispositivo sin acoplar la UI al plugin
- Mision: Armar el esqueleto de la app de campo

---

*Generado por Challenge Generator — Pragma. `README.md` tiene el enunciado completo del reto para la persona. `PROMPT_MEJORA.md` es la variante para pegar en un chat, si se prefiere ese flujo.*
