import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode;
}
export const ProtectedRoute = ({children}:Props) => {
    const logged=true
    return logged ?children  : <Navigate to={'/error'}/>
};

