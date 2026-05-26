# Sr. Asadero — Sitio Web

Sitio web React + Vite para Sr. Asadero (premium grillhouse). Diseño oscuro, animaciones, y compatible con GitHub Pages.

## Requisitos

- Node 18+ (o Node 16+ recomendado)
- npm

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

Abre http://localhost:3000

## Build y despliegue a GitHub Pages

Hemos configurado `gh-pages` y `vite` para desplegar la carpeta `dist`.

1. Asegúrate de tener el repositorio remoto configurado y haber hecho commit/push.
2. Ejecuta:

```bash
npm run deploy
```

Esto ejecutará `npm run build` y publicará `dist` en la rama `gh-pages`.

> Nota: si tu sitio falla al cargar assets, verifica que `homepage` en `package.json` sea correcto para la ruta de GitHub Pages o mantén `"homepage": "./"` para rutas relativas.

## Notas de configuración

- `vite.config.js` usa `base: './'` para que los assets sean relativos.
- Tailwind está configurado (`tailwind.config.cjs`, `postcss.config.cjs`).

## Comandos

- `npm run dev` — servidor de desarrollo
- `npm run build` — build de producción
- `npm run preview` — abrir build localmente
- `npm run deploy` — publicar en GitHub Pages (usa `gh-pages`)

## Reemplazar datos

- Menú y testimonios están en `src/data/menu.js` y `src/data/testimonials.js`.

## Phone / WhatsApp

Reemplaza el número `5212290000000` en `src/components/WhatsAppFloat.jsx` si necesitas otro número.
