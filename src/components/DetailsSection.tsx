import React from 'react'
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Cog8ToothIcon, BriefcaseIcon, ClockIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import { ProductSectionTypes } from './types'


function DetailsSection({ page }: ProductSectionTypes) {
    return (
        <section id='detailsSection' className='rounded-lg border-2 border-gray-300 p-2 pt-10 space-y-4'>
            <h2 className='font-bold'>Offer details</h2>
            <div className='space-y-4 md:grid md:grid-cols-2 md:gap-10 md:items-center md:space-y-0'>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <Cog8ToothIcon className='h-5 w-5' />
                        <span className='text-sm'>Technology</span>
                    </p>
                    {
                        page === "edit-product" &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                            />
                            <button className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }
                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-3'>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 1</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }

                        </span>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 2</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 3</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                    </p>
                </div>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <BriefcaseIcon className='h-5 w-5' />
                        <span className='text-sm'>Business Model</span>
                    </p>
                    {
                        page === "edit-product" &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                            />
                            <button className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }
                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-3'>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 1</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 2</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Label 3</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                    </p>
                </div>
            </div>
            <div className='space-y-4 md:grid md:grid-cols-2 md:gap-10 md:items-center md:space-y-0'>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <ClockIcon className='h-5 w-5' />
                        <span className='text-sm'>TRL</span>
                    </p>
                    {
                        page === "edit-product" &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                            />
                            <button className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }

                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))] gap-3'>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sit sapiente voluptas alias quo similique velit eaque vitae obcaecati possimus maxime et sequi itaque repellendus optio voluptate, consequatur eius! Odio.</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                    </p>
                </div>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <BanknotesIcon className='h-5 w-5' />
                        <span className='text-sm'>Costs</span>
                    </p>
                    {
                        page === "edit-product" &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                            />
                            <button className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }
                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-3'>
                        <span className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                            <small>1000$</small>
                            {
                                page === "edit-product" &&
                                <small> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                            }
                        </span>
                    </p>
                </div>
            </div>


        </section>
    )
}

export default DetailsSection