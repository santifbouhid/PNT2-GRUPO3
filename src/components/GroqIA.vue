<script >
import Groq from "groq-sdk";

const recetas = async () => fetch('https://dummyjson.com/recipes')
.then(res => res.json())

const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });
const restriccion = "vegetariana"
const testReceta = {
  "id": 5,
  "nombre": "Pollo con Salsa de Mango",
  "ingredientes": [
    "Muslos de pollo",
    "Mango, picado",
    "Cebolla roja, picada finamente",
    "Cilantro, picado",
    "Jugo de limón",
    "Jalapeño, picado",
    "Sal y pimienta al gusto",
    "Arroz cocido para servir"
  ],
  "instrucciones": [
    "Sazona los muslos de pollo con sal y pimienta.",
    "Asa o hornea el pollo hasta que esté completamente cocido.",
    "En un tazón, combina el mango picado, la cebolla roja picada, el cilantro picado, el jalapeño picado y el jugo de limón.",
    "Pica el pollo cocido y mézclalo con la salsa de mango.",
    "Sirve sobre arroz cocido."
  ],
  "tiempoDePreparacionMinutos": 15,
  "tiempoDeCoccionMinutos": 25,
  "porciones": 3,
  "dificultad": "Fácil",
  "cocina": "Mexicana",
  "caloriasPorPorcion": 380,
  "etiquetas": ["Pollo", "Salsa"],
  "idDeUsuario": 26,
  "imagen": "https://cdn.dummyjson.com/recipe-images/5.webp",
  "calificacion": 4.9,
  "conteoDeReseñas": 63,
  "tipoDeComida": ["Cena"],
  "restricciones": []
}

export async function getGroqChatCompletion() {
  const recipes = await recetas();
 // recipes.recipes.forEach(element => {
    return  groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "Traeme una alternativa" + restriccion + " de la receta " + JSON.stringify(testReceta)
        },
        {
          "role": "assistant",
          "content": "```json"
        }
      ],
      "model": "llama3-70b-8192",
      "stop": "```"
    }).then(res => console.log(res.choices[0].message.content));
  //});
}

getGroqChatCompletion()

</script>

<template>
</template>

<style scoped>
</style>