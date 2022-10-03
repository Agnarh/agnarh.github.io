import React from 'react';
import { SectionWrapper } from '../common/sideSectionWrapper';
import { ExperienceRecord } from './experienceRecord';

export const Experience = () => (
    <SectionWrapper name="Experience">
        <ExperienceRecord
            start="Jun 2022"
            title="Senior Software Engineer"
            companyName="Alfaleasing"
            companyLink="https://alfaleasing.ru/"
            responsibilities={[
                'Implemented business related features',
                'Proposed and implemented technical improvements',
                'Clarified requirements with the customer',
                'Participated in grooming/planning sessions',
                'Performed code reviews'
            ]} />
        <ExperienceRecord
            start="May 2021"
            end="Jun 2022"
            title="Senior Software Engineer"
            companyName="EPAM"
            companyLink="https://www.epam.com/"
            responsibilities={[
                'Implemented business related features',
                'Proposed and implemented technical improvements',
                'Conducted demos for the customer',
                'Clarified requirements with the customer',
                'Participated in grooming/planning sessions',
                'Performed code reviews'
            ]} />
        <ExperienceRecord
            start="Sep 2020"
            end="May 2021"
            title="Software Engineer"
            companyName="EPAM"
            companyLink="https://www.epam.com/"
            responsibilities={[
                'Participated in releases',
                'Implemented business related features',
                'Discussed and clarified requirements with the customer',
                'Conducted technical demos and demos for the customer',
                'Participated in grooming/planning sessions',
                'Supervised junior developers',
                'Performed code reviews',
                'Conducted daily meetings'
            ]}
            achievements={[
                'Moved a legacy SPA into current portal and resolved integration and authentication issues',
                'Configured RD project from the scratch (React+Typescript) and established CI pipeline for it'
            ]} />
        <ExperienceRecord
            start="Mar 2019"
            end="Sep 2020"
            title="Software Engineer"
            companyName="EPAM"
            companyLink="https://www.epam.com/"
            responsibilities={[
                'Took responsibility on challenging tasks (Mobile view implementation, FE performance optimization)',
                'Implemented business related features',
                'Participated in releases',
                'Participated in Code Reviews',
                'Participated in grooming/planning sessions',
                'Played active part in the process of tasks clarification and decomposition with customer'
            ]}
            achievements={[
                'Introduced Typescript to the project'
            ]} />
        <ExperienceRecord
            start="Mar 2017"
            end="Mar 2019"
            title="Software Engineer"
            companyName="EPAM"
            companyLink="https://www.epam.com/"
            responsibilities={[
                'Implemented business related features',
                'Communicated with customer on daily basis',
                'Participated in grooming/planning sessions',
                'Conducted daily meetings',
                'Performed demos for team members and the customer'
            ]}
            achievements={[
                'Convinced and implemented a refactoring of a complicated page in SPA to React+Redux and covered it with unit tests',
                'Gradually refactored part of a legacy code base to a modern ES6+ standards and covered it with unit tests',
                'Onboarded 4 developers'
            ]} />
        <ExperienceRecord
            start="Apr 2016"
            end="Mar 2017"
            title="Junior Software Engineer"
            companyName="EPAM"
            companyLink="https://www.epam.com/"
            responsibilities={[
                'Implemented business related features',
                'Communicated with customer on daily basis',
                'Partially refactored legacy code',
                'Participated in code reviews',
                'Participated in grooming/planning sessions',
            ]} />
    </SectionWrapper>
);