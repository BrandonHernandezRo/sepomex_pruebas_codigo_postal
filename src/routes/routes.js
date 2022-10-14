import { Error404 } from '../pages/Error404';
import { BasicLayout } from '../layouts/BasicLayout';
import routesClient from './routes.Client';


const routes = [
    ...routesClient,   
{
    
    path:"*",
    layout: BasicLayout,
    component: Error404,
},
];

export default routes;
