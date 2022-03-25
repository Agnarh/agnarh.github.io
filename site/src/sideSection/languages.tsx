import React from 'react';
import { SkillRecord } from './skillRecord';

export const Languages = () => (
    <div className="row gy-1 px-2 py-1">
        <h4 className="fw-bold">Languages</h4>
        <hr/>
        <SkillRecord name="English" value={80} label="Professional Working Proficiency" />
        <SkillRecord name="Russian" value={100} label="Native Speaker" />
    </div>
);