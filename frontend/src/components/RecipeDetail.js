import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getRecipe } from '../services/api';
import '../styles/RecipeDetail.css';

const RecipeDetail = () => {
    const [recipe, setRecipe] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRecipe(id).then((response) => {
            setRecipe(response.data);
        });
    }, [id]);

    if (!recipe) return <div>Loading...</div>;

    return (
        <div>
            <div className="recipe-detail">
                <h2>{recipe.title}</h2>
                <div className="recipe-section">
                    <h3>Ingredients</h3>
                    <ol>
                        {recipe.ingredients.split('\n').map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ol>
                </div>
                <div className="recipe-section">
                    <h3>Instructions</h3>
                    <ol>
                        {recipe.instructions.split('\n').map((instruction, index) => (
                            <li key={index}>{instruction}</li>
                        ))}
                    </ol>
                </div>
            </div>
            <button className='back-button' onClick={() => navigate(-1)}>Back</button>
        </div>

    );
};

export default RecipeDetail;
