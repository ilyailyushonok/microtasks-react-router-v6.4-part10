import {createBrowserRouter, Navigate, RouteObject} from "react-router-dom";
import {App} from "../../App.tsx";
import {Error404} from "../pages/Error404.tsx";
import {lazy, Suspense} from "react";
import {PrivateRouts} from "../pages/PrivateRouts.tsx";
import {Login} from "../Login.tsx";
import {ProtectedPage} from "../pages/ProtectedPage.tsx";

// Ленивая загрузка компонентов
const Adidas = lazy(() => import("../pages/Adidas"));
const Puma = lazy(() => import("../pages/Puma.tsx"));
const Abibas = lazy(() => import("../pages/Abibas.tsx"));
const Prices = lazy(() => import("../pages/Prices.tsx"));
const Model = lazy(() => import("../pages/Model.tsx"));

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    PROTECTED:'/protected',
    ERROR404: '/error',
    LOGIN: '/login',
} as const;


const publicRoutes : RouteObject[]=[

            {
                path: "/:model/:id",
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Model />
                    </Suspense>
                ),
            },
            {
                path: PATH.ADIDAS,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Adidas />
                    </Suspense>
                ),
            },
            {
                path: PATH.PUMA,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Puma />
                    </Suspense>
                ),
            },
            {
                path: PATH.ABIBAS,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Abibas />
                    </Suspense>
                ),
            },
            {
                path: PATH.PRICES,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Prices />
                    </Suspense>
                ),
            },

            {
                path: PATH.ERROR404,
                element:  <Error404/>
            },
            {
                path: PATH.LOGIN,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <Login />
                    </Suspense>
                ),
            },

]

const privateRoutes : RouteObject[]=[
    {
    path: PATH.PROTECTED,
        element: (
       <ProtectedPage/>
),
}
]
export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        ),
        errorElement:<Navigate to={PATH.ERROR404}/>,
        children: [{
            element:<PrivateRouts/>,
            children:privateRoutes
        },
            ...publicRoutes,
        ]
    }])