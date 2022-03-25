import React from 'react';
import { ContactRecord } from './contactRecord';

export const PersonalInfo = () => (
    <div className="row gy-1 px-2 py-2">
        <h4 className="fw-bold">Personal Info</h4>
        <hr/>
        <ContactRecord
            name="Location"
            value="Russia, Saratov" />
        <ContactRecord
            name="Email"
            href="mailto:uyuddar@gmail.com"
            value="uyuddar@gmail.com" />
        <ContactRecord
            name="LinkedIn"
            href="https://www.linkedin.com/in/iurii-perederii/"
            value="linkedin.com/in/iurii-perederii" />
        <ContactRecord
            name="Telegram"
            href="https://t.me/agnarh"
            value="t.me/agnarh" />
    </div>
);