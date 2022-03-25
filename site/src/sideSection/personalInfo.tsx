import React from 'react';
import { SideSectionWrapper } from './sideSectionWrapper';
import { ContactRecord } from './contactRecord';

export const PersonalInfo = () => (
    <SideSectionWrapper name="Personal Info">
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
    </SideSectionWrapper>
);