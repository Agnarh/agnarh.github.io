import React from 'react';
import { SideSectionWrapper } from './sideSectionWrapper';
import { SkillRecord } from './skillRecord';

export const Languages = () => (
    <SideSectionWrapper name="Languages">
        <SkillRecord name="English" value={80} label="Professional Working Proficiency" />
        <SkillRecord name="Russian" value={100} label="Native Speaker" />
    </SideSectionWrapper>
);