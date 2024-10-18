import React from 'react';
import TodoApp from './components/TodoApp';
import ThemeSwitcher from './components/ThemeSwitcher';
import Counter from './components/Counter';
import Card from './components/Card';
import cards from './data/cards';
import './App.css';

const App = () => {
    return (
        <div>
            <h1>reschool davaleba</h1>
            <ThemeSwitcher />
            <TodoApp />
            <Counter />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {cards.map(card => (
                    <Card 
                        key={card.id}
                        title={card.title} 
                        image={card.image} 
                        description={card.description} 
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
