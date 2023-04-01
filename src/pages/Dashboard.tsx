
import { Outlet, useLocation } from "react-router-dom";
import Header from '@/components/Header';
import Aside from "@/components/Aside";
import { useAppSelector } from '@/redux-toolkit/hooks';
import { useGetAppConfigurationQuery } from '@/redux-toolkit/api/appConfigurationSlice';
import { useEffect } from "react";
import { useGetProductQuery } from "@/redux-toolkit/api/productSlice";


function Dashboard() {
    const { isOpen: isAsideOpen } = useAppSelector((state) => state.dashboardAside);
    const { data: appConfig, error: appConfigError } = useGetAppConfigurationQuery(import.meta.env.VITE_APP_ID);
    const { data: productData } = useGetProductQuery(6781);
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({ top: 0 })
    }, [location.pathname])

    useEffect(() => {
        // update color variable after appconfig has been fetched
        if (appConfig) {
            let root = document.querySelector(':root') as HTMLElement;
            root.style.setProperty("--color-primary", appConfig.mainColor)
        } else if (appConfigError) {
            let root = document.querySelector(':root') as HTMLElement;
            root.style.setProperty("--color-primary", "#272e71")
        }

    }, [appConfig, appConfigError])

    return (
        <>
            <div>
                <Header />
                <main className='md:flex relative max-w-app-fit mx-auto'>
                    <section className={`fixed transition-all duration-1000 w-[90%] z-[2]  h-full max-w-[300px] ${isAsideOpen ? "left-0" : "left-[-500px]"} md:w-auto md:max-w-none md:flex-[.3] md:self-start md:h-fit md:sticky md:top-[82px] md:left-0`}>
                        <Aside />
                    </section>

                    <section className="md:flex-[.7]">
                        <Outlet context={productData} />
                    </section>
                </main>

            </div>

        </>

    )
}

export default Dashboard