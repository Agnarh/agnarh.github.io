import React from 'react';
import { Summary } from './summary';
import { Experience } from './experience';
import { Education } from './education';

export const MainSection = () => (
    <div className="col col-12 col-lg-7">
        <Summary />
        <Experience />
        <Education />
    </div>
);