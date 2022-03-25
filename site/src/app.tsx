import React, { FC } from 'react';
import { Header } from './header';
import { Content } from './content';
import './app.scss';

const App: FC = () => (
    <div className="app">
        <Header />
        <Content />
    </div>
);

export default App;