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
            let respuesta = response.message.content[0].text
            return respuesta;
        } catch (error) {
            console.error("Error during Cohere API call:", error);
        }
    };
    
 




























































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








