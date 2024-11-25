import { CohereClientV2 } from 'cohere-ai';

    const cohere = new CohereClientV2({
        token: '7XXw1VvCJfbfnyVa3hRax8cf619L0NadOBf0LyXh',
    });
    
    export async function pedirReceta(prompt){
        const recipe = prompt;
        const messages = [
            {
                role: "system",
                content:
                    "Purpose: You are a recipe assistant designed to generate or retrieve recipes based on user queries. Your task is to populate a predefined JSON template with the details of a recipe that matches the user's input query. You will have to populate the predefined JSON template in Spanish. \n\nInput: You will receive:\n\n- prompt with a description of the recipe the user wants (e.g., \"I need a recipe for chicken curry\" or \"Show me a quick pasta recipe\").\n\n\nComplete the provided JSON template with accurate, detailed, and realistic recipe data.\nEnsure all fields are filled. If specific details are not available or do not apply, use placeholders like \"Not Available\" or appropriate default values (e.g., 0 for numbers, empty arrays for lists).\nMake sure all field values align with the context of the prompt.\nConstraints:\n\nBe concise and professional in your outputs.\nThe recipe should be coherent and tailored to the prompt. If the user query does not specify certain details, use creativity to fill the gaps while ensuring the recipe is appealing. The JSON template to populate should be in JSON format too on the response.",
            },
            {
                role: "user",
                content: `${recipe}\nPor favor, completa la siguiente estructura JSON con los detalles de la receta:\n Para el campo "apto" en el template del JSON, solo podes incluir valores de la siguiente lista, si y solo si las recetas son aptas en relacion a los valores: "veggie", "vegan", "gf". \n\n{\n  \"name\": \"\",\n  \"ingredients\": [],\n  \"instructions\": [],\n  \"prepTimeMinutes\": null,\n  \"cookTimeMinutes\": null,\n  \"servings\": null,\n  \"difficulty\": \"\",\n  \"cuisine\": \"\",\n  \"caloriesPerServing\": null,\n  \"tags\": [],\n  \"userId\": null,\n  \"image\": \"\",\n  \"rating\": null,\n  \"reviewCount\": null,\n  \"mealType\": [],\n  \"apto\": []\n}`,
            },
        ];
    
        try {
            const response = await cohere.chat({
                messages,
                model: "command-r-08-2024",
            });
    
            //console.log(JSON.stringify(response, null, 2));
    
            let respuesta = response.message.content[0].text
    
    
            //console.log(respuesta)
            return respuesta;
        } catch (error) {
            console.error("Error during Cohere API call:", error);
        }
    };
    
    let respuesta =  pedirReceta();
    
    
    const estructuraJSON = {
        "_id": "",
        "name": "",
        "ingredients": [],
        "instructions": [],
        "prepTimeMinutes": null,
        "cookTimeMinutes": null,
        "servings": null,
        "difficulty": "",
        "cuisine": "",
        "caloriesPerServing": null,
        "tags": [],
        "userId": null,
        "image": "",
        "rating": null,
        "reviewCount": null,
        "mealType": [],
        "apto": []
    }
    
    
    
    const respuestaPars = {
        "_id": "empanadas-de-carne",
        "name": "Empanadas de Carne Jugosas",
        "ingredients": [
            "500 gramos de carne molida de res",
            "1 cebolla grande picada",
            "2 dientes de ajo picados",
            "1 pimiento rojo pequeño picado",
            "1 taza de guisantes congelados",
            "1/2 taza de pasas",
            "1 cucharadita de comino molido",
            "1/2 cucharadita de pimentón dulce",
            "Sal y pimienta al gusto",
            "3 tazas de harina de trigo",
            "1 cucharadita de sal",
            "1/2 taza de agua fría",
            "Aceite para freír"
        ],
        "instructions": [
            "En un tazón grande, combina la carne molida, la cebolla, el ajo, el pimiento, los guisantes, las pasas, el comino, el pimentón, la sal y la pimienta. Mezcla bien hasta que todos los ingredientes estén integrados.",
            "En un tazón separado, mezcla la harina, la sal y el agua fría hasta formar una masa suave. Amasa durante unos minutos hasta que la masa esté elástica y no se pegue a tus manos.",
            "Divide la masa en porciones pequeñas y forma bolas. Luego, estira cada bola con un rodillo hasta obtener círculos delgados.",
            "Coloca una cucharada generosa de relleno de carne en el centro de cada círculo de masa. Humedece los bordes con un poco de agua y cierra las empanadas, sellando los bordes con un tenedor.",
            "Calienta una sartén grande con aceite suficiente para freír. Fríe las empanadas por ambos lados hasta que estén doradas y crujientes. Retíralas y colócalas en papel absorbente para eliminar el exceso de aceite.",
            "Sirve las empanadas calientes con tu salsa favorita o simplemente disfrútalas tal cual."
        ],
        "prepTimeMinutes": 30,
        "cookTimeMinutes": 15,
        "servings": 12,
        "difficulty": "Intermedio",
        "cuisine": "Latina",
        "caloriesPerServing": 250,
        "tags": [
            "empanadas",
            "carne",
            "aperitivo",
            "cena"
        ],
        "userId": null,
        "image": "empanadas-de-carne.jpg",
        "rating": 4.8,
        "reviewCount": 25,
        "mealType": [
            "Aperitivo",
            "Cena"
        ],
        "apto": []
    }
    
    const aptoV =  'veggie'
    
    
    const adaptarReceta = async (receta, estructura ,apto) => {
    
    
        const messages = [
            {
                role: "system",
                content:
                    "Eres un asistente especializado en modificar recetas para adaptarlas a restricciones dietéticas específicas. Tu tarea es recibir una receta y adaptarla según las necesidades del usuario que pueden ser \"veggie\", \"vegan\", \"gluten-free\". Y por ultimo completar la estructura JSON que te pase el usuario con los datos de la receta, la estructura JSON tenes que mantenerla si o si, en caso de que haya campos vacios completalos y que tengan conherencia con la receta.",
            },
            {
                role: "user",
                content: `Necesito que me conviertas la siguiente receta a '${apto}'. Carga la receta en la siguiente estructura JSON: ${estructura}, mantene el mismo formato del JSON a completar.\n\nReceta:\n${receta.name}`,
            },
        ];
    
        try {
            const response = await cohere.chat({
                messages,
                model: "command-r-08-2024",
            });
    
            //console.log("Receta adaptada:", response.message.content[0].text);
            // console.log("Receta adaptada:", response.message.content[0].text);
            return response.text;
        } catch (error) {
            // console.error("Error durante la llamada a Cohere API:", error);
        }
    };
    
    const adaptReceta = adaptarReceta(respuestaPars, estructuraJSON, aptoV)




























































// const fs = require('fs');

// const recipesFile = fs.readFileSync('./recipes.json', 'utf8');
//
// // Convierte el contenido en un objeto JSON
// const jsonData = JSON.parse(recipesFile);
//
// const jsonString = JSON.stringify(jsonData);
//
// let traducidos = '';
//
// //https://dummyjson.com/recipes?limit=10&skip=10
// const getRecipe = async () => {
//     const response = await fetch('https://www.mockachino.com/770e676d-e81c-40/allRecipes')
//     const responseJSON = await response.json();
//     const responseString = JSON.stringify(responseJSON);
//
//     return responseString;
// }


// const recipeResponse = await recipe();
//
//
// const recipeString = JSON.stringify(recipeResponse.json());




//
// (async () => {
//     const data = await getRecipe();
//     const response = await cohere.chat({
//         model: 'command-r-plus',
//         messages: [
//             {
//                 role: 'user',
//                 content: `translate this into spanish: ${data}, just answer with the text in format JSON`,
//             },
//         ],
//     });
//     traducidos = response.message.content
//     console.log(response);
//     console.log(response.message.content);
//     await fs.promises.writeFile('traducidos.json', JSON.stringify(traducidos))
// })();








