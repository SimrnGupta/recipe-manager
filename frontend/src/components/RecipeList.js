import React, { useEffect, useState } from 'react';
import { getRecipes, deleteRecipe } from '../services/api';
import { useNavigate } from 'react-router-dom';

import RecipeListItem from './RecipeListItem';
import '../styles/RecipeList.css';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getRecipes().then((response) => {
            setRecipes(response.data);
        });
    }, []);

    const handleDelete = (id) => {
        deleteRecipe(id).then(() => {
            setRecipes(recipes.filter(recipe => recipe.id !== id));
        });
    };

    return (
        <div className='container'>
            <h2>Your Recipes</h2>
            <table className="recipe-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {recipes.map((recipe) => (
                        <RecipeListItem key={recipe.id} recipe={recipe} onDelete={handleDelete} />
                    ))}
                </tbody>
            </table>

            <button className='create-button' onClick={() => navigate('/add')}>Create Recipe</button>
        </div>
    );
};

export default RecipeList;
