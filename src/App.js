import React from 'react';
import ReciprocityCalculator from './ReciprocityCalculator';
import './App.css';

function App() {
    return (
        <div className="App">
            <div class="header">
                <h1>FILM RECIPROCITY CALCULATOR</h1>
            </div>
            <div class="calculator">
                <ReciprocityCalculator/>
            </div>
        </div>
    );
}

export default App;
