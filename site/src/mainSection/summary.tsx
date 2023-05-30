import { SectionWrapper } from '../common/sideSectionWrapper';
import React from 'react';

const startDate = new Date('2016-04-11T00:00:00');

export const Summary = () => {
    const years = new Date(new Date().valueOf() - startDate.valueOf()).getFullYear() - 1970;

    return (
        <SectionWrapper name="Summary">
            <div>
                I'm a software developer with {years} years of experience. I specialize in front-end and web technologies but also have an experience in back end as well. I have experience in all stages of the software development life cycle for dynamic web projects. I am able to work across the whole project lifecycle and have experience of working in large teams distributed over the world.
            </div>
        </SectionWrapper>
    );
};