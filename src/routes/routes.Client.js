import { ClientLayaout } from '../layouts/Client/ClientLayout';
import { BuscarCodBrandon } from '../pages/Client/ModSEPOMEX/BuscarCodBrandon';
import { BuscarCodVero} from '../pages/Client/ModSEPOMEX/BuscarCodVero';
import { BuscarCodDavid} from '../pages/Client/ModSEPOMEX/BuscarCodDavid';
import { BuscarCP} from '../pages/Client/ModSEPOMEX/BuscarCP';
import { PostPaises } from '../pages/Client/ModSEPOMEX/PostPaises';

const routesClient = [
    {
        path:"/",
        layout:ClientLayaout,
        component:BuscarCodBrandon,
        exact:true,
    },
    {
        path:"/cp_vero",
        layout:ClientLayaout,
        component:BuscarCodVero,
        exact:true,
    },
    {
        path:"/cp_david",
        layout:ClientLayaout,
        component:BuscarCodDavid,
        exact:true,
    },
    {
        path:"/cp",
        layout:ClientLayaout,
        component:BuscarCP,
        exact:true,
    },
    {
        path:"/post1",
        layout:ClientLayaout,
        component:PostPaises,
        exact:true,
    },
];

export default routesClient;