import React from 'react';
import { SectionWrapper } from '../common/sideSectionWrapper';
import { SkillRecord } from './skillRecord';

export const Skills = () => (
    <SectionWrapper name="Skills">
        <SkillRecord name="Javascript" value={100} label="Expert" />
        <SkillRecord name="React" value={80} label="Advanced" />
        <SkillRecord name="Cascading Style Sheets (CSS)" value={100} label="Expert" />
        <SkillRecord name="HyperText Markup Language (HTML)" value={100} label="Expert" />
    </SectionWrapper>
);