import React, { FC } from 'react';

type ExperienceRecordProps = {
    start: string;
    end?: string;
    title: string;
    companyName: string;
    responsibilities: string[];
    achievements?: string[]
};

export const ExperienceRecord: FC<ExperienceRecordProps> = ({ start, end, title, companyName, responsibilities, achievements }) => (
    <>
        <div className="col col-12 col-xl-2 fw-bold">{start} - {end ? end : 'Present'}</div>
        <div className="col col-12 col-xl-10">
            <h4 className="fw-bold">{title}</h4>
            <h4 className="fst-italic">{companyName}</h4>
            <div className="my-3">
                <h6>Key Responsibilities:</h6>
                <ul>
                    {responsibilities.map(responsibility => <li key={responsibility}>{responsibility}</li>)}
                </ul>
            </div>
            {achievements && (
                <div className="my-3">
                    <h6>Key Achievements:</h6>
                    <ul>
                        {achievements.map(achievement => <li key={achievement}>{achievement}</li>)}
                    </ul>
                </div>
            )}
        </div>
    </>
);