import React from 'react';
import { deleteRecipe } from '../services/api';

const RemoveRecipe = ({ id }) => {
    const handleDelete = () => {
        deleteRecipe(id).then(() => {
            console.log('Recipe deleted');
        });
    };

    return <button onClick={handleDelete}>Delete Recipe</button>;
};

export default RemoveRecipe;
