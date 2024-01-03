import React from 'react';
import RootLayout from '@/components/Layout/RootLayout';

const AboutPage = () => {
    return (
        <div>
            <h1>this is about page</h1>
        </div>
    );
};

export default AboutPage;

AboutPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}