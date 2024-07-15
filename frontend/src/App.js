import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import RecipeDetail from './components/RecipeDetail';
import EditRecipe from './components/EditRecipe';
import NotFound from './components/NotFound';

import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <header className="App-header">
                    <h1>COOKBOOK</h1>
                </header>
                <div className='container'>
                <Routes>
                    <Route path="/" element={<RecipeList/>} />
                    <Route path="/add" element={<AddRecipe/>} />
                    <Route path="/recipes/:id" element={<RecipeDetail/>} />
                    {/* <Route path="/edit/:id" element={<EditRecipe/>} /> */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
