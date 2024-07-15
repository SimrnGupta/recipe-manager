import React from 'react';
import { useNavigate } from 'react-router-dom';
import { addRecipe } from '../services/api';
import RecipeForm from './RecipeForm';

import '../styles/AddRecipe.css';

const AddRecipe = () => {
    const navigate = useNavigate();

    const handleAddRecipe = (recipe) => {
        addRecipe(recipe).then(() => {
            navigate('/')
        });
    };

    return (
        <div className='container'>
            <RecipeForm onSubmit={handleAddRecipe} buttonText="Add Recipe" />
        </div>
    );
};

export default AddRecipe;
