import React, { FC } from 'react';
import './header.scss';

export const Header: FC = () => {
    return (
        <div className="header">
            <img src="photo.jpg" className="rounded-circle me-4 my-2 d-none d-sm-inline" alt="photo"/>
            <div className="d-flex flex-column justify-content-center d-sm-block">
                <h1>Iurii Perederii</h1>
                <h3>Senior Software Engineer</h3>
            </div>
        </div>
    );
};