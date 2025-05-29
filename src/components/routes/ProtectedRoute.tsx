import {ProtectedPage} from "../pages/ProtectedPage.tsx";
import {Error404} from "../pages/Error404.tsx";
import {ReactNode} from "react";

type Props = {
    children: ReactNode;
}
export const ProtectedRoute = ({children}:Props) => {
    const isChildren=children?<ProtectedPage/>:<Error404/>
    return (
        {isChildren}
    );
};

