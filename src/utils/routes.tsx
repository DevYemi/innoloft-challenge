import { Route } from "react-router-dom";
import AppLayout from "../components/AppLayout";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import MainPage from "../pages/MainPage";


export default function GetRoutes() {
   return (
      <Route
         path='/'
         element={
            <AppLayout>
               <Dashboard />
            </AppLayout>
         }
         errorElement={<ErrorPage />}
      >
         <Route
            index={true}
            element={
               <AppLayout>
                  <MainPage />
               </AppLayout>
            }
            errorElement={<ErrorPage />}
         ></Route>

      </Route>
   )
}