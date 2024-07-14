import React, { useEffect, useState } from 'react';
import { getRecipes } from '../services/api';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipes().then((response) => {
            setRecipes(response.data);
        });
    }, []);

    return (
        <div>
            <h2>Recipes</h2>
            <ul>
                {recipes.map((recipe) => (
                    <li key={recipe.id}>{recipe.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;
