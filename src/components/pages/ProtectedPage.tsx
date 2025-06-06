import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props={
    children?:ReactNode
}
export const ProtectedPage = ({children}:Props) => {
   let isLoggined=false
    return (
        <div>
            {isLoggined?children:<Navigate to={'/login'}/>}
        </div>
    );
};

