import React from 'react'
import companyLogo from "@/assets/logo.png"
import gsap from "gsap"

interface PropTypes {
    isAsideOpen: boolean,
    toggleAsideDisplay: (value: boolean) => void
}

function Header({ isAsideOpen, toggleAsideDisplay }: PropTypes) {


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
        <header className='flex sticky top-0 z-[2] justify-between items-center bg-primary py-4 px-2 md:block'>
            <div className='md:max-w-app-fit md:mx-auto'>
                <span>
                    <img
                        src={companyLogo}
                        alt="company-logo"
                    />
                </span>
            </div>
            <div
                id='Nav-hamburger'
                className='cursor-pointer space-y-1 md:hidden'
                onClick={() => { animateHamburger(!isAsideOpen); toggleAsideDisplay(!isAsideOpen) }}>
                <span className='block w-5 cursor-pointer rounded-3xl h-1 bg-white' />
                <span className='block w-8 cursor-pointer rounded-3xl h-1 bg-white' />
                <span className='block w-5 cursor-pointer rounded-3xl h-1 bg-white' />
            </div>



        </header>
    )
}

export default Header