# Esqueleto de la App de Campo

La aplicación híbrida de campo para agentes de ventas necesita modularizarse y estructurarse de manera que la navegación y el acceso a las capacidades del dispositivo no estén acoplados a la interfaz de usuario. La aplicación debe permitir a los agentes acceder a funciones del dispositivo como la cámara, el GPS y el almacenamiento local sin que la UI dependa directamente de los plugins de Ionic.

## Informacion General

| Campo | Valor |
|-------|-------|
| **Tema** | App híbrida con Ionic |
| **Nivel** | advanced-l2 |
| **Tipo** | practical |
| **Tiempo estimado** | 8 horas |

## Fases del Reto

### Fase 0: Configuración del Proyecto

**Objetivo:** Obtener el proyecto base funcional enviando el Código Base a un asistente de IA, que lo analizará, corregirá errores y generará un ZIP listo para usar.

**Tiempo estimado:** 15-30 minutos

**Instrucciones:**

- Asegúrate de tener instalado para ejecutar el proyecto: Node.js 18+, npm, VS Code o similar.
- Copia todo el contenido del campo **Código Base** de este reto — incluyendo el texto de instrucciones que aparece al inicio.
- Abre un asistente de IA (Claude en claude.ai, ChatGPT o Gemini — se recomienda Claude), pega el contenido copiado en el chat y envíalo.
- El asistente analizará los archivos, corregirá errores y generará un archivo ZIP descargable. Descárgalo y extráelo en la carpeta donde quieras trabajar.
- Ejecuta `npm install && npm run build` (o `npm start`). Si no hay errores, estás listo.

**Entregable:** El proyecto compila/arranca sin errores.

<details>
<summary>Pistas de conocimiento</summary>

- Copia el Código Base completo incluyendo el texto de instrucciones al inicio — esas instrucciones le indican al asistente exactamente qué hacer con los archivos.
- Si el asistente no genera el ZIP automáticamente al terminar el análisis, escríbele: "genera el ZIP ahora".
- Si el proyecto tiene errores al arrancar, comparte el mensaje de error con el mismo asistente para que lo corrija.

</details>

### Fase 1: Definición de Módulos

**Objetivo:** Identificar y definir los módulos necesarios para la aplicación.

**Tiempo estimado:** 2 horas

**Instrucciones:**

- Enumera los principales módulos que necesita la aplicación (por ejemplo, módulo de autenticación, módulo de navegación, módulo de acceso a dispositivo).
- Define las responsabilidades y dependencias de cada módulo.

**Entregable:** Documento que describe los módulos identificados, sus responsabilidades y dependencias.

<details>
<summary>Pistas de conocimiento</summary>

- Considera la separación de preocupaciones y el encapsulamiento de funcionalidades.

</details>

### Fase 2: Implementación de la Navegación

**Objetivo:** Implementar la navegación entre módulos sin acoplar la UI a los plugins.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña la estructura de navegación de la aplicación.
- Implementa la navegación entre módulos utilizando un servicio de navegación abstracto.

**Entregable:** Servicio de navegación abstracto que permite la transición entre módulos.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza patrones de diseño como el Mediator para manejar la navegación.

</details>

### Fase 3: Acceso a Capacidades del Dispositivo

**Objetivo:** Implementar el acceso a capacidades del dispositivo sin acoplar la UI a los plugins.

**Tiempo estimado:** 3 horas

**Instrucciones:**

- Diseña servicios abstractos para acceder a las capacidades del dispositivo (cámara, GPS, almacenamiento local).
- Implementa estos servicios de manera que la UI pueda utilizarlos sin depender directamente de los plugins de Ionic.

**Entregable:** Servicios abstractos para acceder a las capacidades del dispositivo.

<details>
<summary>Pistas de conocimiento</summary>

- Utiliza el patrón Adapter para encapsular la funcionalidad de los plugins de Ionic.

</details>

## Dimensiones Evaluadas

- **queEs**: ¿Qué son los módulos y cómo se relacionan en la aplicación?
- **paraQueSirve**: ¿Para qué sirve el servicio de navegación abstracto?
- **comoSeUsa**: ¿Cómo se utilizan los servicios abstractos para acceder a las capacidades del dispositivo?

## Criterios de Evaluacion

- Definición clara de módulos y sus responsabilidades.
- Implementación de un servicio de navegación abstracto.
- Implementación de servicios abstractos para acceder a capacidades del dispositivo.

## Como trabajar con un asistente de IA

Hay dos caminos, elegi uno:

- **AGENTS.md** (recomendado) — instrucciones nativas del repo. Abri esta carpeta con tu agente local (Claude Code, Cursor, Codex, Copilot, Gemini) y las carga solo. Sabe que archivos faltan y con que comando se verifica, y completa el scaffold escribiendo en disco.
- **PROMPT_MEJORA.md** — para copiar y pegar en un chat (claude.ai, ChatGPT). Devuelve un ZIP con el proyecto. Sirve si no tenes un agente en el IDE.

Ninguno de los dos resuelve las fases del reto: eso es tu trabajo.

## Verificacion

El proyecto esta listo para trabajar cuando este comando corre sin errores:

```bash
npm install && npm run build
```

---

*Reto generado automaticamente por Challenge Generator - Pragma*
