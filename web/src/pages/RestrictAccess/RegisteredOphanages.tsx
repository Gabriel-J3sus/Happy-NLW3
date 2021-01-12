import React from 'react';

import UserSidebar from '../../components/UserSidebar';

function RegisteredOrphanages() {
    return (
        <UserSidebar status="location" navigate="/user/pending"/>
    );
}

export default RegisteredOrphanages;