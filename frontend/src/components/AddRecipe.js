import React from 'react';
import { addRecipe } from '../services/api';
import RecipeForm from './RecipeForm';

import '../styles/AddRecipe.css';

const AddRecipe = () => {
    const handleAddRecipe = (recipe) => {
        return addRecipe(recipe);
    };

    return (
        <div className='container'>
            <RecipeForm onSubmit={handleAddRecipe} buttonText="Add Recipe" />
        </div>
    );
};

export default AddRecipe;
