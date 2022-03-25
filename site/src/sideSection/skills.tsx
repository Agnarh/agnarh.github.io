import React from 'react';
import { SideSectionWrapper } from './sideSectionWrapper';
import { SkillRecord } from './skillRecord';

export const Skills = () => (
    <SideSectionWrapper name="Skills">
        <SkillRecord name="Javascript" value={100} label="Expert" />
        <SkillRecord name="React" value={80} label="Advanced" />
        <SkillRecord name="Cascading Style Sheets (CSS)" value={100} label="Expert" />
        <SkillRecord name="HyperText Markup Language (HTML)" value={100} label="Expert" />
    </SideSectionWrapper>
);