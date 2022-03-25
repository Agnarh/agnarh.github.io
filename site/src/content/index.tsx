import React from 'react';
import { SideSection } from '../sideSection';
import { MainSection } from '../mainSection';

export const Content = () => (
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col col-12 col-xxl-8">
                <div className="row">
                    <MainSection />
                    <SideSection />
                </div>
            </div>
        </div>
    </div>
);