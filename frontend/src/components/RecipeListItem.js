import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../styles/RecipeListItem.css';

const RecipeListItem = ({ recipe, onDelete }) => {
    const navigate = useNavigate();

    return (
        <tr>
            <td id='name'>{recipe.title}</td>
            <td>
                <button onClick={() => navigate(`/recipes/${recipe.id}`)}>View</button>
                {/* <button onClick={() => navigate(`/edit/${recipe.id}`)}>Edit</button> */}
                <button onClick={() => onDelete(recipe.id)}>Delete</button>
            </td>
        </tr>
    );
};

export default RecipeListItem;
