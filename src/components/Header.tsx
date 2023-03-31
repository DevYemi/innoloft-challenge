import React, { useEffect } from 'react'
import companyLogo from "@/assets/logo.png"
import gsap from "gsap"
import { Link } from 'react-router-dom'
import { } from 'react-redux';
import { toggleAsideDisplay } from '@/redux-toolkit/features/dashboardAside';
import { useAppDispatch, useAppSelector } from '@/redux-toolkit/hooks';
import { useGetAppConfigurationQuery } from '@/redux-toolkit/api/appConfiguration';


function Header() {
    const { data: appConfig, error: appConfigError } = useGetAppConfigurationQuery(import.meta.env.VITE_APP_ID);
    const { isOpen: isAsideOpen } = useAppSelector((state) => state.dashboardAside);
    const dispatch = useAppDispatch()

    useEffect(() => {
        // Animate hamburger anytime isAside value changes
        animateHamburger(isAsideOpen);
    }, [isAsideOpen])


    const animateHamburger = (isOpen: boolean) => {
        const hamburger = document.querySelector('#Nav-hamburger') as HTMLDivElement;

        const tl = gsap.timeline({
            defaults: { duration: .2 }
        })

        //animate timmeline base on navBar state
        if (isOpen) {
            tl.to(hamburger.children[1], {
                scaleX: 0,
                transformOrigin: "left center"
            }).to([hamburger.children[0], hamburger.children[2]], { width: '32px' })
                .to(hamburger.children[0], { rotate: '45deg', translateY: '8px' })
                .to(hamburger.children[2], { rotate: '-45deg', translateY: '-8px' }, "<")
        } else {
            tl.to(hamburger.children[0], { rotate: '0deg', translateY: '0px' })
                .to(hamburger.children[2], { rotate: '0deg', translateY: '0px' }, "<")
                .to([hamburger.children[0], hamburger.children[2]], { width: '20px' })
                .to(hamburger.children[1], {
                    scale: 1
                })
        }
    }

    return (
        <header className={`flex sticky top-0 z-[2] justify-between items-center bg-white py-4 px-2 md:block md:max-w-app-fit md:mx-auto`}>
            <Link to="/" className='block w-[200px] h-[50px] '>
                <img
                    src={appConfig?.logo ? appConfig.logo : appConfigError ? companyLogo : ""}
                    alt="company-logo"
                    className='w-full h-full object-contain object-left'
                />
            </Link>
            <div
                id='Nav-hamburger'
                className='cursor-pointer space-y-1 md:hidden'
                onClick={() => dispatch(toggleAsideDisplay(!isAsideOpen))}>
                <span className='block w-5 cursor-pointer rounded-3xl h-1 bg-primary' />
                <span className='block w-8 cursor-pointer rounded-3xl h-1 bg-primary' />
                <span className='block w-5 cursor-pointer rounded-3xl h-1 bg-primary' />
            </div>



        </header>
    )
}

export default Header