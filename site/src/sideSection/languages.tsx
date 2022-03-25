import React from 'react';
import { SectionWrapper } from '../common/sideSectionWrapper';
import { SkillRecord } from './skillRecord';

export const Languages = () => (
    <SectionWrapper name="Languages">
        <SkillRecord name="English" value={80} label="Professional Working Proficiency" />
        <SkillRecord name="Russian" value={100} label="Native Speaker" />
    </SectionWrapper>
);