# Casino Royale — Frontend (Next.js 14 + TypeScript)

Experiencia de landing page informativa para “Casino Royale” con estética oscura, profesional y elegante. Incluye integración de chatbot con `df-messenger` (Dialogflow Messenger) como burbuja flotante y un mini‑juego de tragamonedas (simulado) realista en el Hero.

---

## Contenidos
- [Tecnologías](#tecnologías)
- [Características](#características)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Primeros pasos](#primeros-pasos)
- [Configuración y personalización](#configuración-y-personalización)
  - [Paleta de colores Tailwind](#paleta-de-colores-tailwind)
  - [Chatbot (`df-messenger`)](#chatbot-df-messenger)
  - [Tragamonedas (SlotMachine)](#tragamonedas-slotmachine)
  - [Aliases de importación](#aliases-de-importación)
- [Calidad de código](#calidad-de-código)
- [Accesibilidad y UX](#accesibilidad-y-ux)
- [SEO y Metadatos](#seo-y-metadatos)
- [Despliegue](#despliegue)
- [Solución de problemas](#solución-de-problemas)
- [Roadmap](#roadmap)

---

## Tecnologías
- Next.js 14 (App Router) + React 18
- TypeScript
- Tailwind CSS (+ `tailwindcss-animate`)
- Framer Motion (animaciones)
- Zustand (estado global simple)
- React Query + React Query Devtools (estado de servidor)
- Radix UI (accesibilidad)
- Lucide React (iconografía)
- ESLint + Prettier

---

## Características
- Diseño oscuro, profesional y elegante con alto contraste.
- Hero con mini‑juego de tragamonedas realista: palanca interactiva (press‑and‑hold), giros secuenciales, easing (aceleración/desaceleración), créditos y apuestas.
- Chatbot Dialogflow Messenger (`df-messenger`) como burbuja flotante en la esquina inferior derecha.
- Secciones informativas inspiradas en el contenido de “Casino Royale”: `Hero`, `Testimonios`, `Sobre Nosotros`, `Legales`.
- Efectos visuales discretos: partículas, ondas de luz y gradientes de fondo, manteniendo legibilidad.
- Arquitectura modular con principios SOLID y Atomic Design a nivel de componentes.

---

## Estructura de carpetas
```
.
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx            # Layout raíz: Providers + bootstrap df-messenger
│  │  ├─ page.tsx              # Página principal (secciones)
│  │  └─ globals.css           # Estilos globales + utilidades Tailwind
│  ├─ components/
│  │  ├─ chatbot/ChatbotWidget.tsx
│  │  ├─ effects/
│  │  │  ├─ AnimatedGradients.tsx
│  │  │  ├─ BackgroundEffects.tsx
│  │  │  ├─ FloatingParticles.tsx
│  │  │  └─ LightWaves.tsx
│  │  ├─ games/SlotMachine.tsx
│  │  ├─ layout/Navigation.tsx
│  │  ├─ providers/Providers.tsx
│  │  ├─ sections/
│  │  │  ├─ AboutSection.tsx
│  │  │  ├─ HeroSection.tsx
│  │  │  ├─ LegalSection.tsx
│  │  │  └─ TestimonialsSection.tsx
│  │  └─ ui/
│  │     ├─ AnimatedCounter.tsx
│  │     ├─ Button.tsx
│  │     └─ ParallaxElement.tsx
│  ├─ lib/utils.ts
│  ├─ store/
│  │  ├─ casinoStore.ts
│  │  └─ chatbotStore.ts
│  └─ types/
│     ├─ global.d.ts           # Declaración JSX de <df-messenger />
│     └─ index.ts
├─ .eslintrc.json
├─ .prettierrc
├─ next.config.js
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
└─ tsconfig.json
```

---

## Primeros pasos

### Requisitos
- Node.js 18.17+ (recomendado Node 20 LTS)
- npm 9+ o pnpm/yarn

### Instalación
```bash
npm install
```

### Desarrollo
```bash
npm run dev
```
Abrir `http://localhost:3000`.

### Build y producción
```bash
npm run build
npm run start
```

---

## Configuración y personalización

### Paleta de colores Tailwind
El proyecto define una paleta `casino` en `tailwind.config.js` (tonos: `gold`, `amber`, `orange`, `dark`, `navy`, `slate`, `zinc`, `neutral`, `gray`, `light`).

Utilidades clave en `src/app/globals.css`:
- `.gradient-text`: degradado ámbar → naranja aplicado a texto.
- `.casino-gradient`: fondo oscuro sutil (`dark` → `navy` → `slate`).
- `.glass-effect`: efecto vidrio suave con buen contraste.
- `.button-primary` y `.button-secondary`: botones acordes a la paleta.

Ajusta colores/tonos en `tailwind.config.js` y utilidades en `globals.css` para refinar contraste.

### Chatbot (`df-messenger`)
- El bootstrap del Messenger se incluye en `src/app/layout.tsx` mediante:
  ```tsx
  <script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" async />
  ```
- El widget se renderiza en `src/components/chatbot/ChatbotWidget.tsx` con el elemento `<df-messenger />`:
  - Props usadas: `intent="WELCOME"`, `chat-title="CasinoBot"`, `agent-id`, `language-code="es"`.
  - Estilo flotante: contenedor con posición fija `bottom-4 right-4`.
- Reemplaza el `agent-id` por el de tu agente en Dialogflow. Opcional: moverlo a una env var (`NEXT_PUBLIC_DF_AGENT_ID`).
- Tipado TS: `src/types/global.d.ts` declara el elemento `df-messenger` para JSX.

### Tragamonedas (SlotMachine)
Componente en `src/components/games/SlotMachine.tsx`:
- Interactividad: palanca con `onMouseDown`/`onMouseUp` (press‑and‑hold), bloqueo cuando no hay créditos suficientes o está girando.
- Animación: 3 carretes con velocidades, duraciones y delays distintos; easing cuadrático (acelera y desacelera) con `requestAnimationFrame`.
- Estado: `credits`, `bet`, `lastWin`, `isSpinning`, `showWin`.
- Símbolos: basados en iconos de `lucide-react` (Coins, Zap, Star, Crown, Trophy) con valores y colores definidos.
- Tamaño compacto (`max-w-sm`) para no invadir el Hero.

Puntos de extensión:
- Ajustar probabilidad de coincidencia y pagos en `calculateWin`.
- Sustituir iconografía por sprites/ilustraciones.
- Exponer callbacks (telemetría o logs).

### Aliases de importación
Definidos en `tsconfig.json` (ej.):
- `@/*` → `src/*`
- `@/components/*` → `src/components/*`

Ejemplo:
```ts
import { SlotMachine } from '@/components/games/SlotMachine'
```

---

## Calidad de código
- ESLint: configuración basada en `next/core-web-vitals` + reglas de TypeScript.
- Prettier: formato consistente (incluye `prettier-plugin-tailwindcss`).
- Scripts comunes:
  ```bash
  npm run lint
  npm run format
  ```
- Estilo: nombres descriptivos, early‑returns, manejo de edge cases, evitar nesting profundo, comentarios breves sólo cuando aporten contexto (el “por qué”).

---

## Accesibilidad y UX
- Radix UI para patrones accesibles.
- Colores con contraste suficiente sobre fondos oscuros.
- Tipografía clara, jerarquía visual consistente, espacios amplios.
- Microinteracciones con Framer Motion sin distraer del contenido.

---

## SEO y Metadatos
- `src/app/layout.tsx` exporta `metadata` y `viewport` separados conforme a Next.js 14.
- Buenas prácticas: títulos descriptivos, descripción, palabras clave, `robots`.

---

## Despliegue
- Recomendado: Vercel.
- Pasos típicos: conectar el repo, setear `NODE_VERSION` si aplica, variables públicas (p. ej. `NEXT_PUBLIC_DF_AGENT_ID`), y desplegar.

---

## Solución de problemas
- No carga `@tanstack/react-query-devtools` → instalar: `npm i @tanstack/react-query-devtools`.
- `df-messenger` no reconocido por TS → añadir/confirmar `src/types/global.d.ts` con la declaración JSX.
- El `style` de `<df-messenger>` debe ser objeto: `style={{ width: '350px', height: '430px' }}`.
- Script de Dialogflow sincronizado → usar `async` y colocarlo en `layout.tsx`.
- Next.js 14 `appDir` → no configurar `experimental.appDir`; es el valor por defecto.

---

## Roadmap
- FASE 3: Testimonios
  - Carrusel automático
  - Efecto de tarjetas apiladas
  - Avatares animados
- FASE 4: Sobre Nosotros
  - Timeline interactivo
  - Íconos flotantes
  - Efecto de revelación on‑scroll
- FASE 5: Sección Legal
  - Acordeón accesible
  - Íconos con estados
  - Progreso visual de lectura
- FASE 6: Elementos Generales
  - Scroll progress bar
  - Botones con efectos
  - Transiciones de página
  - Efectos de cursor
- FASE 7: UX
  - Loading states
  - Feedback visual
  - Micro‑interacciones adicionales

---

¿Dudas o mejoras? Revisa los componentes en `src/components/*` y los estilos en `src/app/globals.css`. El proyecto está diseñado para escalar y mantener una estética coherente con la marca “Casino Royale”.