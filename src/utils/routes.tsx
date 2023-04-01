import { lazy, Suspense } from 'react';
import { Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import LoadingSpinner from '@/components/LoadingSpinner';
const EditProductPage = lazy(() => import("@/pages/EditProductPage"));
const ErrorPage = lazy(() => import("@/pages/ErrorPage"));
const MainPage = lazy(() => import("@/pages/MainPage"));
const ProductPage = lazy(() => import("@/pages/ProductPage"))


export default function GetRoutes() {
   return (
      <Route
         path='/'
         element={<Dashboard />}
         errorElement={
            <Suspense fallback={<LoadingSpinner />}>
               <ErrorPage />
            </Suspense>
         }
      >
         <Route
            index={true}
            element={
               <Suspense fallback={<LoadingSpinner />}>
                  <MainPage />
               </Suspense>
            }
         />
         <Route
            path="product"
            element={
               <Suspense fallback={<LoadingSpinner />}>
                  <ProductPage />
               </Suspense>
            }
         />
         <Route
            path="product/edit"
            element={
               <Suspense fallback={<LoadingSpinner />}>
                  <EditProductPage />
               </Suspense>
            }
         />

      </Route>
   )
}