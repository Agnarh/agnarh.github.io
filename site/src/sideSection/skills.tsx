import React from 'react';
import { SkillRecord } from './skillRecord';

export const Skills = () => (
    <div className="row gy-1 px-2 py-1">
        <h4 className="fw-bold">Skills</h4>
        <hr/>
        <SkillRecord name="Javascript" value={100} label="Expert" />
        <SkillRecord name="React" value={80} label="Advanced" />
        <SkillRecord name="Cascading Style Sheets (CSS)" value={100} label="Expert" />
        <SkillRecord name="HyperText Markup Language (HTML)" value={100} label="Expert" />
    </div>
);