import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RecipeForm.css';

const RecipeForm = ({ initialData = {}, onSubmit, buttonText }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [ingredients, setIngredients] = useState(initialData.ingredients || '');
    const [instructions, setInstructions] = useState(initialData.instructions || '');
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData.title) setTitle(initialData.title);
        if (initialData.ingredients) setIngredients(initialData.ingredients);
        if (initialData.instructions) setInstructions(initialData.instructions);
    }, [initialData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({
            title,
            ingredients,
            instructions,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label id='title'>
                <span>Title</span>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
            </label>
            <label>
                <span>Ingredients</span>

                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </label>
            <label>
                <span>Instructions</span>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
            </label>
            <div className='buttons'>
                <button type="button" onClick={() => navigate(-1)}>Back</button>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
};

export default RecipeForm;
