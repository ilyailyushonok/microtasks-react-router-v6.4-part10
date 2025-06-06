import {Navigate, Outlet} from "react-router-dom";


export const PrivateRouts = () => {
   let isAuth=false
    return (
        <div>
            {isAuth?<Outlet/>:<Navigate to={'/login'}/>}
        </div>
    );
};

