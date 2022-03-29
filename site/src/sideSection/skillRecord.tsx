import React, { FC } from 'react';

const breakpoints = [0, 20, 40, 60, 80];
const levels = ['Basic', 'Novice', 'Intermediate', 'Advanced', 'Expert'];

const getLabel = (value: number) => {
    if (value <= 0) {
        return levels[0];
    }

    if (value > 80) {
        return levels[4];
    }

    let label: string;

    for (let index = 1; index < breakpoints.length; index++) {
        if (breakpoints[index-1] < value && value <= breakpoints[index]) {
            label = levels[index-1];
            break;
        }
    }

    return label;
};


type SkillRecordProps = {
    name: string;
    value: number;
    label?: string;
};

export const SkillRecord: FC<SkillRecordProps> = ({ name, value, label = getLabel(value) }) => (
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