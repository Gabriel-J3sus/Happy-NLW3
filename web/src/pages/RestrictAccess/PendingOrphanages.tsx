import React from 'react';

import UserSidebar from '../../components/UserSidebar';

function PendingOrphanages() {
    return (
        <UserSidebar status="warning" navigate="/users/orphanages" />
    );
}

export default PendingOrphanages;