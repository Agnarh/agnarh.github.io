import React, { FC } from 'react';
import './header.scss';

export const Header: FC = () => {
    return (
        <div className="container-fluid d-flex flex-column justify-content-center d-sm-block header">
            <div className="row justify-content-center px-2">
                <div className="col col-12 col-lg-6 d-flex justify-content-sm-center">
                    <img src="photo.jpg" className="rounded-circle me-4 d-none d-sm-block" width={95} height={95} alt="photo"/>
                    <div>
                        <h1>Iurii Perederii</h1>
                        <h3>Senior Software Engineer</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};