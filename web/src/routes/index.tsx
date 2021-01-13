import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


function Routes() {
    return (
        <BrowserRouter>
            {/* <AppRoutes /> */}
            <AuthRoutes />
        </BrowserRouter>
    );
}

export default Routes;