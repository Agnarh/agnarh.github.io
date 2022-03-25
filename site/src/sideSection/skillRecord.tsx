import React, { FC } from 'react';

type SkillRecordProps = {
    name: string;
    value: number;
    label: string;
};

export const SkillRecord: FC<SkillRecordProps> = ({ name, value, label }) => (
    <div>
        <div>{name}</div>
        <div className="progress">
            <div
                style={{ width: `${value}%` }}
                className="progress-bar skills-progress-bar"
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={100} />
        </div>
        <div className="text-end">{label}</div>
    </div>
);