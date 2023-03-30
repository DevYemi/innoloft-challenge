import React from 'react'
import { NavLink } from 'react-router-dom'
import avatarImg from '@/assets/code.jpeg'



function Aside() {
    return (
        <aside className=' bg-white h-full space-y-5 py-4 px-2 '>
            <div className='flex items-center space-x-4'>
                <span className='block h-12 w-12 aspect-square border border-yellow rounded-full' >
                    <img
                        src={avatarImg}
                        alt="company-logo"
                        className='w-full rounded-full object-cover h-full'
                    />
                </span>
                <div className=' text-sm'>
                    <p className=' font-bold'>Adeyanju Adeyemi</p>
                    <p className=' font-light'>Innoloft Developer</p>
                </div>
            </div>
            <nav className='flex flex-col'>
                <NavLink className={({ isActive }) => (`p-4 hover:bg-gray-300 ${isActive ? "bg-gray-200" : ""} `)} to={"/"}>
                    Home Page
                </NavLink>
                <NavLink className={({ isActive }) => (`p-4 hover:bg-gray-300 ${isActive ? "bg-gray-200" : ""} `)} to={"/product"}>
                    Product Page
                </NavLink>
            </nav>
        </aside>
    )
}

export default Aside