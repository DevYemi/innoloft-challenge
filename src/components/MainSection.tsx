import React, { useState } from 'react'
import { ProductSectionTypes } from './types'
import avatarImg from '@/assets/code.jpeg'
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/solid"
import { MapPinIcon, TrashIcon } from "@heroicons/react/24/outline"
import ReactQuill from 'react-quill'
import { useGetAppConfigurationQuery } from '@/redux-toolkit/api/appConfigurationSlice'
import { useOutletContext } from 'react-router-dom'
import MapBox from './MapBox'
import { ProductDataType } from '@/redux-toolkit/types'



function MainSection({ page }: ProductSectionTypes) {
    const { data: appConfig } = useGetAppConfigurationQuery(import.meta.env.VITE_APP_ID);
    const [description, setDescription] = useState();
    const [isEditing, setIsEditing] = useState(page === "edit-product");
    const productData = useOutletContext<ProductDataType | undefined>();

    console.log(productData);


    const descriptionOnChange = (state: any) => {
        setDescription(state);
        console.log(state)
    }

    return (
        <section id='mainSection' className={`rounded-lg border-2 border-gray-300 md:grid ${appConfig?.hasUserSection ? "md:grid-cols-[1fr,0.7fr] md:gap-4" : "grid-cols-1"}  `}>
            <div className=''>
                <div className='relative'>
                    <div className='max-h-[400px] w-full overflow-hidden'>
                        <img
                            src={productData?.picture}
                            alt="company-logo"
                            className='w-full h-full  object-cover  rounded-t-lg'
                        />
                    </div>

                    <div className='absolute top-0 flex items-center bg-white w-fit rounded-tl-lg rounded-br-lg '>
                        <span className={`block w-fit bg-primary p-2 rounded-tl-lg rounded-br-lg`}>
                            <CheckBadgeIcon className='h-6 w-6 text-white' />
                        </span>
                        <span className='block p-2 w-fit text-black font-bold'>Patent</span>
                    </div>
                    {
                        (page === "edit-product" && isEditing) &&
                        <div className='absolute bg-white top-0 p-3 right-0 rounded-bl-lg cursor-pointer'>
                            <TrashIcon className='h-4 w-4 text-black' />
                        </div>
                    }


                </div>
                <div className='p-2 space-y-4 md:p-4'>
                    {
                        page === "edit-product" ?
                            <input
                                type="text"
                                placeholder='Add a youtube or vimeo link'
                                className='w-full p-2 border border-gray-300 rounded-lg'
                            />
                            :
                            <h1 className='font-bold '>
                                Intelligent Finite Elements in Structural mechanics
                            </h1>
                    }
                    {
                        page === "edit-product" ?
                            <>
                                <ReactQuill theme="snow" value={description} onChange={descriptionOnChange} />
                                <div className='flex items-center justify-end ml-auto space-x-4 opacity-40'>
                                    <button className={`text-primary px-3 py-1`}>Cancel</button>
                                    <button className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
                                        <CheckIcon className='h-4 w-4 text-white' />
                                        <span>Save</span>
                                    </button>
                                </div>
                            </>
                            :
                            <p className=''>
                                In structural mechanics, the Finite Element Method is used to simulate structural deformations and loads, e.g. for the design of components in mechanical or civil engineering. The more complex the structural deformations are, the longer simulation times associated with convergence problems can last. This is where the present invention comes in, by combining the classical Finite Element Method with artificial intelligence. This is the first method in the literature that significantly improves simulation times and convergence properties in this way.

                                Further information you can find in the attached technology offer.
                            </p>
                    }


                </div>
            </div>

            {
                appConfig?.hasUserSection &&
                <div className='p-2 mt-10 space-y-5 md:p-4 '>
                    <h2 className='font-bold'>Offered By</h2>
                    <div className=''>
                        <img
                            width={200}
                            src={productData?.company.logo}
                            alt="company-logo"
                        />
                    </div>
                    <div className='flex items-center space-x-4'>
                        <span className='block h-12 w-12 aspect-square border border-yellow rounded-full' >
                            <img
                                src={productData?.user.profilePicture}
                                alt="company-logo"
                                className='w-full rounded-full object-cover h-full'
                            />
                        </span>
                        <div className=' text-sm'>
                            <p className=' font-bold'>{`${productData?.user.firstName} ${productData?.user.lastName}`}</p>
                            <p className=' font-light'>{productData?.company.name}</p>
                        </div>
                    </div>
                    <div className='space-y-3'>
                        <p className='flex items-center space-x-5'>
                            <MapPinIcon className='h-5 w-5' />
                            <span>{`${productData?.company.address.street} ${productData?.company.address.house}, ${productData?.company.address.zipCode} ${productData?.company.address.city.name}, ${productData?.company.address.country.name}`}</span>
                        </p>
                        {
                            (page !== "edit-product" && !isEditing && productData) &&
                            <MapBox address={productData.company.address} />
                        }

                    </div>


                </div>
            }



        </section>
    )
}

export default MainSection