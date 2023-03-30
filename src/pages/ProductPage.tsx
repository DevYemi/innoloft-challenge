import React from 'react'
import { Link } from 'react-router-dom'
import avatarImg from '@/assets/code.jpeg'
import { CheckBadgeIcon } from "@heroicons/react/24/solid"
import { MapPinIcon, Cog8ToothIcon, BriefcaseIcon, ClockIcon, BanknotesIcon } from "@heroicons/react/24/outline"

function ProductPage() {
    return (
        <div className='px-2 py-4 space-y-5'>
            <Link to={"/product/edit"} className="block w-fit font-semibold p-3 bg-primary text-white rounded-md">
                Edit
            </Link>

            {/* MAIN SECTION */}
            <section id='mainSection' className='rounded-lg border-2 border-gray-300 md:grid md:grid-cols-[1fr,0.7fr] md:gap-4'>
                <div className=''>
                    <div className='relative'>
                        <img
                            src={avatarImg}
                            alt="company-logo"
                            className='w-full h-full rounded-t-lg'
                        />
                        <div className='absolute top-0 flex items-center bg-white w-fit rounded-tl-lg rounded-br-lg '>
                            <span className='block w-fit bg-primary p-2 rounded-tl-lg rounded-br-lg'>
                                <CheckBadgeIcon className='h-6 w-6 text-white' />
                            </span>
                            <span className='block p-2 w-fit text-black font-bold'>Patent</span>
                        </div>

                    </div>
                    <div className='p-2 space-y-4 md:p-4'>
                        <h1 className='font-bold '>
                            Intelligent Finite Elements in Structural mechanics
                        </h1>
                        <p className=''>
                            In structural mechanics, the Finite Element Method is used to simulate structural deformations and loads, e.g. for the design of components in mechanical or civil engineering. The more complex the structural deformations are, the longer simulation times associated with convergence problems can last. This is where the present invention comes in, by combining the classical Finite Element Method with artificial intelligence. This is the first method in the literature that significantly improves simulation times and convergence properties in this way.

                            Further information you can find in the attached technology offer.
                        </p>
                    </div>
                </div>


                <div className='p-2 mt-10 space-y-5 md:p-4 '>
                    <h2 className='font-bold'>Offered By</h2>
                    <div className=''>
                        <img
                            width={200}
                            src={"https://img.innoloft.com/logo.svg"}
                            alt="company-logo"
                        />
                    </div>
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
                    <div className='space-y-3'>
                        <p className='flex items-center space-x-5'>
                            <MapPinIcon className='h-5 w-5' />
                            <span>Jülicher Straße 72a, 52070 Aachen, Germany</span>
                        </p>
                        <p className='w-full h-[300px] bg-gray-500 rounded-sm'>

                        </p>
                    </div>


                </div>

            </section>

            {/* VIDEO SECTION */}
            <section id='videoSection' className='rounded-lg border-2 border-gray-300 p-2 pt-10 md:p-4'>
                <h2 className='font-bold'>Video</h2>
                <div className='w-full max-w-[700px] mx-auto aspect-square h-[400px] bg-gray-500 '>

                </div>
            </section>

            {/* DETAILS SECTION */}
            <section id='detailsSection' className='rounded-lg border-2 border-gray-300 p-2 pt-10 space-y-4'>
                <h2 className='font-bold'>Offer details</h2>
                <div className='space-y-4 md:grid md:grid-cols-2 gap-10'>
                    <div className=' text-[#6B7280] space-y-2'>
                        <p className='flex items-center space-x-2'>
                            <Cog8ToothIcon className='h-5 w-5' />
                            <span className='text-sm'>Technology</span>
                        </p>
                        <p className='grid grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] gap-3'>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 1</span>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 2</span>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 3</span>
                        </p>
                    </div>
                    <div className=' text-[#6B7280] space-y-2'>
                        <p className='flex items-center space-x-2'>
                            <BriefcaseIcon className='h-5 w-5' />
                            <span className='text-sm'>Business Model</span>
                        </p>
                        <p className='grid grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] gap-3'>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 1</span>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 2</span>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Label 3</span>
                        </p>
                    </div>
                </div>
                <div className='space-y-4 md:grid md:grid-cols-2 gap-10'>
                    <div className=' text-[#6B7280] space-y-2'>
                        <p className='flex items-center space-x-2'>
                            <ClockIcon className='h-5 w-5' />
                            <span className='text-sm'>TRL</span>
                        </p>
                        <p className='grid grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))] gap-3'>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit sapiente voluptas alias quo similique velit eaque vitae obcaecati possimus maxime et sequi itaque repellendus optio voluptate, consequatur eius! Odio.</span>
                        </p>
                    </div>
                    <div className=' text-[#6B7280] space-y-2'>
                        <p className='flex items-center space-x-2'>
                            <BanknotesIcon className='h-5 w-5' />
                            <span className='text-sm'>Costs</span>
                        </p>
                        <p className='grid grid-cols-[repeat(auto-fill,_minmax(70px,_1fr))] gap-3'>
                            <span className='bg-[#E5E7EB] py-1 px-2 rounded-3xl text-xs'>1000$</span>
                        </p>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default ProductPage