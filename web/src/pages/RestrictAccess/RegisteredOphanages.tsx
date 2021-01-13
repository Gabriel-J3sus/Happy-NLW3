import React from 'react';

import UserSidebar from '../../components/UserSidebar';
import { useAuth } from '../../contexts/auth';

function RegisteredOrphanages() {
    const { user } = useAuth();

    return (
        <>
            <UserSidebar status="location" navigate="/users/pending"/>
            <h1>{user?.id}</h1>
        </>
    );
}

export default RegisteredOrphanages;