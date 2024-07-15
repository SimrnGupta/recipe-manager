import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/RecipeForm.css';

const RecipeForm = ({ initialData = {}, onSubmit, buttonText }) => {
    const [title, setTitle] = useState(initialData.title || '');
    const [ingredients, setIngredients] = useState(initialData.ingredients || '');
    const [instructions, setInstructions] = useState(initialData.instructions || '');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        if (initialData.title) setTitle(initialData.title);
        if (initialData.ingredients) setIngredients(initialData.ingredients);
        if (initialData.instructions) setInstructions(initialData.instructions);
    }, [initialData]);

    const validate = () => {
        const newErrors = {};
        if (!title) newErrors.title = 'Title is required';
        if (!ingredients) newErrors.ingredients = 'Ingredients are required';
        if (!instructions) newErrors.instructions = 'Instructions are required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newErrors = validate();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setErrors({});
            onSubmit({ title, ingredients, instructions })
                .then(() => navigate('/'))
                .catch((error) => {
                    setErrors({ form: `Failed to submit. Please try again. ${error}` });
                });
        }
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
            {errors.title && <div className="error">{errors.title}</div>}
            <label>
                <span>Ingredients</span>
                <textarea
                    value={ingredients}
                    onChange={(e) => setIngredients(e.target.value)}
                />
            </label>
            {errors.ingredients && <div className="error">{errors.ingredients}</div>}
            <label>
                <span>Instructions</span>
                <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                />
            </label>
            {errors.instructions && <div className="error">{errors.instructions}</div>}
            <div className='buttons'>
                <button type="button" onClick={() => navigate(-1)}>Back</button>
                <button type="submit">{buttonText}</button>
            </div>
        </form>
    );
};

export default RecipeForm;
