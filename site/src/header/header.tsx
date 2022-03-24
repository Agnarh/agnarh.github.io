import React, { FC } from 'react';
import { ContactRecord } from './contactRecord';

export const Header: FC = () => {
    return (
        <div>
            <div>Photo</div>
            <div>
                <ContactRecord
                    name="Email"
                    href="mailto:uyuddar@gmail.com"
                    value="uyuddar@gmail.com" />
                <ContactRecord
                    name="LinkedIn"
                    href="https://www.linkedin.com/in/iurii-perederii"
                    value="linkedin.com/in/iurii-perederii" />
                <ContactRecord
                    name="Telegram"
                    href="https://t.me/agnarh"
                    value="t.me/agnarh" />
                <ContactRecord
                    name="Location"
                    value="Saratov, Russia" />
            </div>
        </div>
    );
};