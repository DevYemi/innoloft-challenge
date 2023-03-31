
import { Outlet } from "react-router-dom";
import Header from '@/components/Header';
import { useCallback, useState } from "react";
import Aside from "@/components/Aside";
import { useDispatch, useSelector } from "react-redux";
import { getDashboardAsideState } from "@/redux-toolkit/features/dashboardAside";


function Dashboard() {
    const { isOpen: isAsideOpen } = useSelector(getDashboardAsideState);
    const dispatch = useDispatch()
    return (
        <>
            <div>
                <Header />
                <main className='md:flex relative max-w-app-fit mx-auto'>
                    <section className={`fixed transition-all duration-1000 w-[90%] z-[2]  h-full max-w-[300px] ${isAsideOpen ? "left-0" : "left-[-500px]"} md:w-auto md:max-w-none md:flex-[.3] md:self-start md:h-fit md:sticky md:top-[60px] md:left-0`}>
                        <Aside />
                    </section>

                    <section className="md:flex-[.7]">
                        <Outlet />
                    </section>
                </main>

            </div>

        </>

    )
}

export default Dashboard