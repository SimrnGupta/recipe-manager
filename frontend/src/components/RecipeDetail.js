import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipe } from '../services/api';

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();


    useEffect(() => {
        getRecipe(id).then((response) => {
            setRecipe(response.data);
        });
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.ingredients}</p>
            <p>{recipe.instructions}</p>
        </div>
    );
};

export default RecipeDetail;
