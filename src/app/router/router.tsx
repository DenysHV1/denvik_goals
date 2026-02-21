import { lazy, Suspense } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { Spinner } from "denvik-ui-kit";
import { RootLayout } from "@/app/layouts/root-layout";

const HomeRoute = lazy(() => import("@/pages/HomeRoute"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<Spinner />}>{node}</Suspense>
);

const routeObjects: RouteObject[] = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: withSuspense(<HomeRoute />),
      },
      {
        path: "*",
        element: withSuspense(<NotFound />),
      },
    ],
  },
];

export const router = createBrowserRouter(routeObjects);

//? Example
//! {
//!   path: "dashboard",
//!   element: withSuspense(<DashboardLayout />),
//!   children: [
//!     { index: true, element: withSuspense(<DashboardHome />) },
//!     { path: "settings", element: withSuspense(<DashboardSettings />) },
//!     { path: "users/:id", element: withSuspense(<DashboardUser />) },
//!   ],
//! },