import React from 'react';
import { SectionWrapper } from '../common/sideSectionWrapper';
import { SkillRecord } from './skillRecord';

export const Skills = () => (
    <SectionWrapper name="Skills">
        <SkillRecord name="Javascript" value={100} />
        <SkillRecord name="React" value={90} />
        <SkillRecord name="NextJS" value={70} />
        <SkillRecord name="Redux, Jest, Webpack" value={80} />
        <SkillRecord name="Cascading Style Sheets (CSS)" value={100} />
        <SkillRecord name="HyperText Markup Language (HTML)" value={100} />
        <SkillRecord name="Typescript" value={60} />
        <SkillRecord name="C#/.Net" value={60} />
        <SkillRecord name="SQL" value={30} />
        <SkillRecord name="Git" value={60} />
    </SectionWrapper>
);