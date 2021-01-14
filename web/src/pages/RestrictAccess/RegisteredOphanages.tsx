import React from 'react';

import UserSidebar from '../../components/UserSidebar';
import { useAuth } from '../../contexts/auth';

function RegisteredOrphanages() {
    const { user } = useAuth();

    return (
        <>
            <UserSidebar status="location" />
            <h1>{user?.email}</h1>
        </>
    );
}

export default RegisteredOrphanages;