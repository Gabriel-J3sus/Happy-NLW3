import React from 'react';

import UserSidebar from '../../components/UserSidebar';

function PendingOrphanages() {
    return (
        <UserSidebar status="warning" navigate="/user/orphanages" />
    );
}

export default PendingOrphanages;