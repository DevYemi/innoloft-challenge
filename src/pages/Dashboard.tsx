
import { Outlet } from "react-router-dom";
import Header from '@/components/Header';
import { useCallback, useState } from "react";
import Aside from "@/components/Aside";


function Dashboard() {
    const [isAsideOpen, setIsAsideOpen] = useState(false);


    const toggleAsideDisplay = useCallback((value: boolean) => {
        setIsAsideOpen(value);
    }, []);
    return (
        <>
            <div>
                <Header isAsideOpen={isAsideOpen} toggleAsideDisplay={toggleAsideDisplay} />
                <main className='md:flex relative max-w-app-fit mx-auto'>
                    <section className={`fixed transition-all duration-1000 w-[90%] z-[2]  h-full max-w-[300px] ${isAsideOpen ? "left-0" : "left-[-500px]"} md:w-auto md:max-w-none md:flex-[.3] md:self-start md:h-fit md:sticky md:top-[60px] md:left-0`}>
                        <Aside toggleAsideDisplay={toggleAsideDisplay} />
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