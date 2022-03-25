import React, { FC } from 'react';

type SectionWrapperProps = {
    name: string;
    className?: string;
    children: React.ReactNode;
};

export const SectionWrapper: FC<SectionWrapperProps> = ({ name, children, className = '' }) => (
    <div className={`row gy-1 px-2 py-3 ${className}`}>
        <h4 className="fw-bold">{name}</h4>
        <hr/>
        {children}
    </div>
);