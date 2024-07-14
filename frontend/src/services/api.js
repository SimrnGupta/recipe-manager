import axios from 'axios';

const API_BASE_URL = 'http://127.0.0.1:8000/api';

const api = axios.create({
    baseURL: API_BASE_URL,
});

export const getRecipes = () => api.get('/recipes/');
export const addRecipe = (recipe) => api.post('/recipes/', recipe);
export const getRecipe = (id) => api.get(`/recipes/${id}/`);
export const deleteRecipe = (id) => api.delete(`/recipes/${id}/`);

export default api;
