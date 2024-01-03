import React from 'react';
import DashboardLayout from '@/components/DashboardLayout/DashboardLayout';
import RootLayout from '@/components/Layout/RootLayout';

const AdminPage = () => {
    
    return (
        <div>
            <h2>this is admin page</h2>
            
        </div>
    );
    
};

export default AdminPage;
// console.log(AdminPage);


AdminPage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            <DashboardLayout>
                {page}
            </DashboardLayout>
        </RootLayout>
    )
}