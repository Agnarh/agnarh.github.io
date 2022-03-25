import React, { FC } from 'react';
import './header.scss';

export const Header: FC = () => {
    return (
        <div className="header">
            <div className="photo">Photo</div>
            <div>
                <h1>Iurii Perederii</h1>
                <h3>Senior Software Engineer</h3>
            </div>
        </div>
    );
};