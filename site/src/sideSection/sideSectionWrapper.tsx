import React, { FC } from 'react';

type SideSectionWrapperProps = {
    name: string;
    children: React.ReactNode;
};

export const SideSectionWrapper: FC<SideSectionWrapperProps> = ({ name, children }) => (
    <div className="row gy-1 px-2 py-1">
        <h4 className="fw-bold">{name}</h4>
        <hr/>
        {children}
    </div>
);