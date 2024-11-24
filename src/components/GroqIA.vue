<script >
import Groq from "groq-sdk";

// const recetas = async () => fetch('https://dummyjson.com/recipes')
// .then(res => res.json())

const groq = new Groq({ apiKey: "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", dangerouslyAllowBrowser: true });
//const restriccion = "vegetariana"
// const testReceta = {
//     "_id": "empanadas-de-carne",
//     "name": "Empanadas de Carne Jugosas",
//     "ingredients": [
//         "500 gramos de carne molida de res",
//         "1 cebolla grande picada",
//         "2 dientes de ajo picados",
//         "1 pimiento rojo pequeño picado",
//         "1 taza de guisantes congelados",
//         "1/2 taza de pasas",
//         "1 cucharadita de comino molido",
//         "1/2 cucharadita de pimentón dulce",
//         "Sal y pimienta al gusto",
//         "3 tazas de harina de trigo",
//         "1 cucharadita de sal",
//         "1/2 taza de agua fría",
//         "Aceite para freír"
//     ],
//     "instructions": [
//         "En un tazón grande, combina la carne molida, la cebolla, el ajo, el pimiento, los guisantes, las pasas, el comino, el pimentón, la sal y la pimienta. Mezcla bien hasta que todos los ingredientes estén integrados.",
//         "En un tazón separado, mezcla la harina, la sal y el agua fría hasta formar una masa suave. Amasa durante unos minutos hasta que la masa esté elástica y no se pegue a tus manos.",
//         "Divide la masa en porciones pequeñas y forma bolas. Luego, estira cada bola con un rodillo hasta obtener círculos delgados.",
//         "Coloca una cucharada generosa de relleno de carne en el centro de cada círculo de masa. Humedece los bordes con un poco de agua y cierra las empanadas, sellando los bordes con un tenedor.",
//         "Calienta una sartén grande con aceite suficiente para freír. Fríe las empanadas por ambos lados hasta que estén doradas y crujientes. Retíralas y colócalas en papel absorbente para eliminar el exceso de aceite.",
//         "Sirve las empanadas calientes con tu salsa favorita o simplemente disfrútalas tal cual."
//     ],
//     "prepTimeMinutes": 30,
//     "cookTimeMinutes": 15,
//     "servings": 12,
//     "difficulty": "Intermedio",
//     "cuisine": "Latina",
//     "caloriesPerServing": 250,
//     "tags": [
//         "empanadas",
//         "carne",
//         "aperitivo",
//         "cena"
//     ],
//     "userId": null,
//     "image": "empanadas-de-carne.jpg",
//     "rating": 4.8,
//     "reviewCount": 25,
//     "mealType": [
//         "Aperitivo",
//         "Cena"
//     ],
//     "apto": []
// }

export async function getGroqChatCompletion(restriccion, receta) {
    return  groq.chat.completions.create({
      "messages": [
        {
          "role": "user",
          "content": "Traeme una alternativa en español" + restriccion + " de la receta " + JSON.stringify(receta) + ". Mantene la estructura de JSON original y agregale al array de apto si es gluten-gree ('gf'), 'vegan' y/o 'veggie'."
        },
        {
          "role": "assistant",
          "content": "```json"
        }
      ],
      "model": "llama3-70b-8192",
      "stop": "```"
    }).then();
    //res => console.log(res.choices[0].message.content)
   
    // .then(res => console.log(res.choices[0].message.content));
  //});
}

getGroqChatCompletion()

</script>

<template>
</template>

<style scoped>
</style>