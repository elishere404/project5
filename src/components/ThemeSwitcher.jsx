import React, { useState } from 'react';

const ThemeSwitcher = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div style={{ backgroundColor: darkMode ? 'black' : 'white', color: darkMode ? 'white' : 'black', padding: '20px' }}>
            <button onClick={toggleTheme}>
                Switch to {darkMode ? 'Light' : 'Dark'} Mode
            </button>
        </div>
    );
};

export default ThemeSwitcher;
