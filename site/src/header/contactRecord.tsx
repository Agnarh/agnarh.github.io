import React, { FC } from 'react';

type ContactRecordProps = {
    name: string;
    href?: string;
    value: string;
};

export const ContactRecord: FC<ContactRecordProps> = ({ name, href, value }) => {
    return (
        <div>
            <div>{name}:</div>
            <div>
                {href
                    ? <a href={href}>{value}</a>
                    : value}
            </div>
        </div>
    );
};