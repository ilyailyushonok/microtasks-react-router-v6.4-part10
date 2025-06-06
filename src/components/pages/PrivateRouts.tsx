import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props={
    children?:ReactNode
}
export const PrivateRouts = ({children}:Props) => {
   let isAuth=true
    return (
        <div>
            {isAuth?children:<Navigate to={'/login'}/>}
        </div>
    );
};

