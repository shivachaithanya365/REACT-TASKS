import React, { Component } from 'react';
import ResponsiveTable from './Table';

export default class Recipies extends Component {
    state = {
        recipes: [],
        loader: true,
        error: null,
    };

    componentDidMount() {
        fetch('https://dummyjson.com/recipes')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    recipes: data.recipes,
                    loader: false,
                });
            })
            .catch(error => {
                this.setState({
                    error: error.message,
                    loader: false,
                });
            });
    }

    render() {
        const { recipes, loader, error } = this.state;

        const columns = [
            { header: 'S.No', accessor: 's.no' },
            { header: 'Image', accessor: 'image' },
            { header: 'Name', accessor: 'name' },
            { header: 'Ingredients', accessor: 'ingredients' },
            { header: 'Instructions', accessor: 'instructions' },
            { header: 'Details', accessor: 'details' },
        ];

        const transformedData = recipes.map((recipe, index) => ({
            sno: index + 1,
            image: <img src={recipe.image} alt={recipe.name} style={{ width: '150px', height: 'auto' }} />,
            name: recipe.name,
            ingredients: (
                <ul>
                    {recipe.ingredients.map((ingredient, i) => (
                        <li key={`${recipe.id}-ingredient-${i}`}>{ingredient}</li>
                    ))}
                </ul>
            ),
            instructions: (
                <ol>
                    {recipe.instructions.map((instruction, i) => (
                        <li key={`${recipe.id}-instruction-${i}`}>{instruction}</li>
                    ))}
                </ol>
            ),
            details: (
                <ul>
                    <li>Prep Time: {recipe.prepTimeMinutes} minutes</li>
                    <li>Cook Time: {recipe.cookTimeMinutes} minutes</li>
                    <li>Servings: {recipe.servings}</li>
                    <li>Difficulty: {recipe.difficulty}</li>
                    <li>Cuisine: {recipe.cuisine}</li>
                    <li>Calories per Serving: {recipe.caloriesPerServing}</li>
                    <li>Tags: {recipe.tags.map(tag => `#${tag}`).join(", ")}</li>
                    <li>Rating: {recipe.rating}</li>
                    <li>Review Count: {recipe.reviewCount}</li>
                    <li>Meal Type: {recipe.mealType}</li>
                </ul>
            ),
        }));

        return (
            <>
                <h1 style={{ textAlign: 'center', margin: '50px' }}>------------RECIPES LIST------------</h1>
                <div className="App">
                    {loader ? (
                        <h3 style={{ textAlign: 'center', margin: 'auto' }}>Loading...</h3>
                    ) : error ? (
                        <h2 style={{ textAlign: 'center', margin: 'auto' }}>{error}</h2>
                    ) : recipes.length > 0 ? (
                        <ResponsiveTable columns={columns} data={transformedData} />
                    ) : (
                        <h2 style={{ textAlign: 'center', margin: 'auto' }}>No recipes available.</h2>
                    )}
                </div>
            </>
        );
    }
}
