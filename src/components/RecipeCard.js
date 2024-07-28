import React from 'react';

const RecipeCard = ({ recipe }) => {
    return (
        <div className='card'>
            <h1 style={{ marginTop: '10px' }}>{recipe.name}</h1>
            <img src={recipe.image} alt={recipe.name} style={{ width: '200px', height: 'auto', borderRadius: '30px' }} />
            <p><strong>Prep Time :</strong> {recipe.prepTimeMinutes} minutes</p>
            <p><strong>Cook Time :</strong> {recipe.cookTimeMinutes} minutes</p>
            <p><strong>Servings :</strong> {recipe.servings}</p>
            <p><strong>Difficulty :</strong> {recipe.difficulty}</p>
            <p><strong>Cuisine :</strong> {recipe.cuisine}</p>
            <p><strong>Calories per Serving :</strong> {recipe.caloriesPerServing}</p>
            <h2>Ingredients :-</h2>
            <ul>
                {recipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions :-</h2>
            <ol>
                {recipe.instructions.map((instruction, index) => (
                    <li key={index}>{instruction}</li>
                ))}
            </ol>
            <p><strong>Rating :</strong> {recipe.rating} ({recipe.reviewCount} reviews)</p>
            <p><strong>Tags :</strong> {recipe.tags.join(', ')}</p>
            <p><strong>Meal Type :</strong> {recipe.mealType.join(', ')}</p>
        </div>
    );
};

export default RecipeCard;
