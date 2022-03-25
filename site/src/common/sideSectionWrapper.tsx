import React, { FC } from 'react';

type SectionWrapperProps = {
    name: string;
    children: React.ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({ name, children }) => (
    <div className="row gy-1 px-2 py-3">
        <h4 className="fw-bold">{name}</h4>
        <hr/>
        {children}
    </div>
);