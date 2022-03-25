import React from 'react';
import { PersonalInfo } from './personalInfo';
import { Skills } from './skills';
import { Languages } from './languages';
import './sideSection.scss';

export const SideSection = () => (
    <div className="col col-12 col-md-5 side-section">
        <PersonalInfo />
        <Skills />
        <Languages />
    </div>
);