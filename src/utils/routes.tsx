import { Route } from "react-router-dom";
import AppLayout from "@/components/AppLayout";
import Dashboard from "@/pages/Dashboard";
import EditProductPage from "@/pages/EditProductPage";
import ErrorPage from "@/pages/ErrorPage";
import MainPage from "@/pages/MainPage";
import ProductPage from "@/pages/ProductPage";


export default function GetRoutes() {
   return (
      <Route
         path='/'
         element={<Dashboard />}
         errorElement={<ErrorPage />}
      >
         <Route
            index={true}
            element={<MainPage />}
            errorElement={<ErrorPage />}
         />
         <Route
            path="product"
            element={<ProductPage />}
            errorElement={<ErrorPage />}
         />
         <Route
            path="product/edit"
            element={<EditProductPage />}
            errorElement={<ErrorPage />}
         />

      </Route>
   )
}