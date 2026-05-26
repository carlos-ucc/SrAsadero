# Sr. Asadero — Restaurante Premium

Sitio web moderno de Sr. Asadero construido con React, Vite, Tailwind CSS, Framer Motion y react-scroll.

## 🚀 Inicio Rápido

### 1. Instalar Dependencias

```bash
npm install
```

### 2. Ejecutar Desarrollo Local

```bash
npm run dev
```

Abre `http://localhost:5173` en tu navegador.

### 3. Build para Producción

```bash
npm run build
```

Esto genera carpeta `dist/` lista para desplegar.

### 4. Preview del Build

```bash
npm run preview
```

---

## 📦 Dependencias

- **React 19** — UI moderna
- **Vite 7** — Build rápido
- **Tailwind CSS 4** — Estilos
- **Framer Motion 12** — Animaciones
- **React Icons 5** — Íconos
- **React Scroll 1** — Navegación suave
- **gh-pages 6** — Despliegue en GitHub Pages

---

## 🌐 Despliegue en GitHub Pages

### Paso 1: Preparar Repositorio

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/SrAsadero.git
git push -u origin main
```

### Paso 2: Actualizar package.json

Reemplaza `YOUR_GITHUB_USERNAME` en `package.json`:

```json
"homepage": "https://YOUR_GITHUB_USERNAME.github.io/SrAsadero/"
```

### Paso 3: Desplegar

```bash
npm run deploy
```

Esto:
- Ejecuta `npm run build`
- Publica carpeta `dist/` en rama `gh-pages`

### Paso 4: Configurar GitHub Pages

1. Ve a **Settings** de tu repo
2. Busca **Pages**
3. En **Source** selecciona:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Haz clic en **Save**

Tu sitio estará disponible en:
```
https://YOUR_USERNAME.github.io/SrAsadero/
```

---

## 📝 Personalizar

### Cambiar Datos

- **Menú:** Edita `src/data/menu.js`
- **Testimonios:** Edita `src/data/testimonials.js`
- **WhatsApp:** Busca `5212290000000` en los componentes
- **Contacto:** Actualiza dirección en `src/components/Location.jsx`

### Cambiar Colores

En `src/index.css`:
```css
background: linear-gradient(to right, #ff6b00, #ff3c00); /* Naranja a Rojo */
```

### Agregar Componentes

1. Crea archivo en `src/components/ComponenteName.jsx`
2. Importa en `src/App.jsx`
3. Agrega en orden de rendering

---

## 📱 Responsive

- Mobile (< 768px) — Stack vertical, hamburger menu
- Tablet (768px - 1024px) — 2 columnas
- Desktop (> 1024px) — 3-4 columnas

---

## ⚡ Optimizaciones

- Tailwind CSS minificado
- Vite comprime assets
- Scroll behavior smooth
- Lazy loading de imágenes
- Animaciones GPU-optimizadas (Framer Motion)

---

## 🐛 Troubleshooting

**Error: Assets no cargan en GitHub Pages**
- Verifica que `homepage` en `package.json` sea correcto
- Revisa que `base` en `vite.config.js` sea `/SrAsadero/`

**Menú móvil no se abre**
- Asegúrate que react-icons está instalado: `npm install react-icons`

**Build falla**
- Borra `node_modules/` y `package-lock.json`
- Ejecuta `npm install` nuevamente

---

## 📧 Soporte

Para preguntas, contacta al equipo o crea una issue en el repositorio.

---

**© 2026 Sr. Asadero | Sitio Web Premium**
