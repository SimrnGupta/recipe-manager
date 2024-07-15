import React, { useState, useEffect } from 'react';
import { getRecipe } from '../services/api';
import { useParams, useNavigate } from 'react-router-dom';
import RecipeForm from './RecipeForm';

const EditRecipe = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [initialData, setInitialData] = useState(null);

    useEffect(() => {
        getRecipe(id).then((response) => {
            setInitialData(response.data);
        });
    }, [id]);

    const handleEditRecipe = (updatedRecipe) => {
        // updateRecipe(id, updatedRecipe).then(() => {
        //     navigate(`/recipes/${id}`);
        // });
    };

    if (!initialData) return <div>Loading...</div>;

    return (
        <div>
            <h2>Edit Recipe</h2>
            <RecipeForm initialData={initialData} onSubmit={handleEditRecipe} buttonText="Save Changes" />
        </div>
    );
};

export default EditRecipe;
