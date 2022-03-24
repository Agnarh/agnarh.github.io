import React, { FC } from 'react';
import { Header } from './header/header';
import './app.scss';

const App: FC = () => {
    return (
        <div className="app">
            <Header />
            App
        </div>
    );
};

export default App;