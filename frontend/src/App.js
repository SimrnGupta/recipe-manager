import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import NotFound from './components/NotFound';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>Recipe Manager</h1>
                </header>
                <Routes>
                    <Route path="/" element={<RecipeList/>} />
                    <Route path="/add" element={<AddRecipe/>} />
                    <Route path="/recipes/:id" element={<RecipeDetail/>} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
