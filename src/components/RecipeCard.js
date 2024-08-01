import React from 'react';

const RecipeCard = ({ recipe }) => {
    const card = {
        backgroundColor: '#f0f0f0',
        border: '2px solid black',
        borderRadius: '30px',
        boxShadow: '3px 5px 10px rgba(0, 0, 0, 1)',
        width: '32%',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '20px',
        justifyContent: 'flexStart',
        alignItems: 'center',
        flexDirection: 'column',
        paddingTop: '20px',
    }
    return (
        <div style={card}>
            <h2 style={{ marginTop: '10px', textAlign: 'center' }}>{recipe.name}</h2>
            <img src={recipe.image} alt={recipe.name} style={{ width: '200px', height: 'auto', borderRadius: '30px' }} />
            <p><strong>Prep Time : </strong> {recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time : </strong> {recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings : </strong> {recipe.servings}</p>
            <p><strong>Difficulty : </strong> {recipe.difficulty}</p>
            <p><strong>Cuisine : </strong> {recipe.cuisine}</p>
            <p><strong>Calories per Serving : </strong> {recipe.caloriesPerServing}</p>
            <h2>Ingredients :- </h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions :- </h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <p><strong>Rating : </strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
            <p><strong>Tags:</strong> {recipe.tags ? recipe.tags.map(tag => `#${tag}`).join(' ') : 'No tags'}</p>
            <p><strong>Meal Type : </strong> {recipe.mealType.join(', ')}</p>
        </div>
    );
};

export default RecipeCard;
