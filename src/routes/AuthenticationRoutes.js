import { lazy } from 'react';

// project imports
import Loadable from 'components/UI/Loadable';
import MinimalLayout from 'layouts/MinimalLayout';

// login option 3 routing
const AuthLogin = Loadable(lazy(() => import('pages/auth/Login')));
// const AuthRegister3 = Loadable(lazy(() => import('views/pages/authentication/authentication3/Register3')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
    path: '/',
    element: <MinimalLayout />,
    children: [
        {
            path: '/auth/login',
            element: <AuthLogin />
        }
        // {
        //     path: '/pages/register/register3',
        //     element: <AuthRegister3 />
        // }
    ]
};

export default AuthenticationRoutes;
