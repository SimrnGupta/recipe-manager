import React, { useState } from 'react';
import { addRecipe } from '../services/api';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addRecipe({ title, ingredients, instructions }).then(() => {
            setTitle('');
            setIngredients('');
            setInstructions('');
        });
        // perform error handling
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add Recipe</h2>
            <label>
                Title:
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </label>
            <label>
                Ingredients:
                <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
            </label>
            <label>
                Instructions:
                <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
            </label>
            <button type="submit">Add Recipe</button>
        </form>
    );
};

export default AddRecipe;
