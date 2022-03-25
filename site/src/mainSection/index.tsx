import React from 'react';
import { Experience } from './experience';
import { Summary } from './summary';

export const MainSection = () => (
    <div className="col col-12 col-lg-7">
        <Summary />
        <Experience />
    </div>
);