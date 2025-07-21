# 🥗 RecetApp – Personalizador de Recetas según Preferencias

**RecetApp** es una aplicación web desarrollada en **Vue 3** que permite consultar recetas y personalizarlas automáticamente en función de tus preferencias alimenticias: **vegano**, **vegetariano** o **sin TACC (gluten free)**.

Este proyecto fue desarrollado como trabajo práctico para la materia **Programación en nuevas tecnologías II**.

---

## 🎯 Funcionalidad principal

El usuario puede:

- Ver un listado de recetas disponibles.
- Seleccionar una preferencia alimentaria.
- Ver cómo las recetas se **modifican automáticamente** para adaptarse a esa preferencia (por ejemplo, reemplazando ingredientes no compatibles).
- Acceder a la vista detallada de cada receta con su lista de ingredientes ajustada.

---

## 🤖 Uso de IA – Cohere

Para modificar las recetas según las restricciones alimenticias, utilizamos **Cohere**, una plataforma de inteligencia artificial orientada al procesamiento de lenguaje natural (NLP).

La IA de Cohere se encarga de:

- Analizar la receta original.
- Identificar ingredientes que no son compatibles con la preferencia elegida.
- Sugerir reemplazos coherentes (por ejemplo: leche → bebida vegetal, huevo → sustituto vegetal, harina común → sin TACC).
- Generar una versión alternativa del contenido manteniendo la coherencia y claridad.

Esto permite ofrecer una **experiencia personalizada, dinámica e inteligente** sin requerir una base de datos de reemplazos fijos.

---

## 🛠️ Tecnologías utilizadas

- [Vue 3](https://vuejs.org/) con **Composition API**
- **JavaScript**
- **HTML5 + CSS3**
- **Cohere API** para generación de texto
- Vite para desarrollo local
