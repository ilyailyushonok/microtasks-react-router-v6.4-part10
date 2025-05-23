import {createBrowserRouter} from "react-router-dom";
import {App} from "../../App.tsx";
import {Adidas} from "../pages/Adidas.tsx";
import {Prices} from "../pages/Prices.tsx";
import {Abibas} from "../pages/Abibas.tsx";
import {Puma} from "../pages/Puma.tsx";
import {Error404} from "../pages/Error404.tsx";
import {Model} from "../pages/Model.tsx";
import { Suspense} from "react";


export const PATH = {
    ADIDAS:'/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
} as const

export const router = createBrowserRouter([
    {
        path: "/",
        element:
            <Suspense fallback={<div>Loading...</div>}>
                <App/>
            </Suspense>,
        errorElement: <Error404/>,
        children: (
            [
                {
                    path: "/:model/:id",
                    element:
                        <Suspense fallback={<div>Loading...</div>}>
                            <Model/>
                        </Suspense>

                },
                {
                    path: PATH.ADIDAS,
                    element:
                        <Suspense fallback={<div>Loading...</div>}>
                            <Adidas/>
                        </Suspense>,

                },
                {
                    path: PATH.PUMA,
                    element:
                        <Suspense fallback={<div>Loading...</div>}>
                            <Puma/>
                        </Suspense>,

                },
                {
                    path: PATH.ABIBAS,
                    element:
                        <Suspense fallback={<div>Loading...</div>}>
                            <Abibas/>,
                        </Suspense>

                },
                {
                    path: PATH.PRICES,
                    element:
                        <Suspense fallback={<div>Loading...</div>}>
                            <Prices/>,
                        </Suspense>

                }
            ]
        )
    },

])