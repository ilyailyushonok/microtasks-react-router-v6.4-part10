import {createBrowserRouter} from "react-router-dom";
import {App} from "../../App.tsx";
import {Adidas} from "../pages/Adidas.tsx";
import {Prices} from "../pages/Prices.tsx";
import {Abibas} from "../pages/Abibas.tsx";
import {Puma} from "../pages/Puma.tsx";
import {Error404} from "../pages/Error404.tsx";
import {Model} from "../pages/Model.tsx";


const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: (
            [
                {
                    path: PATH.ADIDAS,
                    element: <Adidas/>,
                    children:(
                        [{
                            path:"/:model/:id",
                            element:<Model/>
                        }]
                    )
                },
                {
                    path: PATH.PUMA,
                    element: <Puma/>,
                    children:(
                        [{
                            path:"/:model/:id",
                            element:<Model/>
                        }]
                    )
                },
                {
                    path: PATH.ABIBAS,
                    element: <Abibas/>,
                    children:(
                        [{
                            path:"/:model/:id",
                            element:<Model/>
                        }]
                    )
                },
                {
                    path: PATH.PRICES,
                    element: <Prices/>,
                    children:(
                        [{
                            path:"/:model/:id",
                            element:<Model/>
                        }]
                    )
                }
            ]
        )
    },

]);