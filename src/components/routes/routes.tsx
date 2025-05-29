import { createBrowserRouter } from "react-router-dom";
import { App } from "../../App.tsx";
import { Error404 } from "../pages/Error404.tsx";
import { lazy, Suspense } from "react";
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
} as const;

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Suspense fallback={<div>Loading...</div>}>
                <App />
            </Suspense>
        ),
        errorElement: <Error404 />,
        children: [
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
                path: PATH.PROTECTED,
                element: (
                    <Suspense fallback={<div>Loading...</div>}>
                        <ProtectedPage />
                    </Suspense>
                ),
            },
        ],
    },
]);