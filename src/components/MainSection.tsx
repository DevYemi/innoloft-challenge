import React, { useCallback, useEffect, useRef, useState } from 'react'
import { formDetailsType, ProductSectionTypes } from './types'
import { CheckBadgeIcon, CheckIcon } from "@heroicons/react/24/solid"
import { MapPinIcon, TrashIcon } from "@heroicons/react/24/outline"
import ReactQuill from 'react-quill'
import { useGetAppConfigurationQuery } from '@/redux-toolkit/api/appConfigurationSlice'
import { useOutletContext } from 'react-router-dom'
import MapBox from './MapBox'
import { ProductDataType } from '@/redux-toolkit/types'
import { useUpdateProductMutation } from '@/redux-toolkit/api/productSlice'



function MainSection({ page }: ProductSectionTypes) {
    const descriptionWrapper = useRef<HTMLDivElement | null>(null)
    const { data: appConfig } = useGetAppConfigurationQuery(import.meta.env.VITE_APP_ID);
    const [description, setDescription] = useState<formDetailsType>({ value: "", inputValue: "" });
    const [isEditing, setIsEditing] = useState(page === "edit-product");
    const productData = useOutletContext<ProductDataType | undefined>();
    const [updateProductTrigger, { isLoading: isLoadingUpdateProduct }] = useUpdateProductMutation()


    const updateMainSection = async () => { // update Main section form deatils at the backend
        try {
            const objectData = {
                ...productData,
                productId: productData?.id,
                description: description.inputValue

            }

            // make request to db
            await updateProductTrigger(objectData).unwrap()

            setIsEditing(false);

        } catch (error) {
            console.log(error)
        }
    }


    const updateDescription = useCallback((state: string) => {
        setDescription({
            value: state,
            inputValue: state
        });
        if (descriptionWrapper.current) {
            descriptionWrapper.current!.innerHTML = state
        }
    }, [])

    const onCancelClick = () => { // reset all values
        setIsEditing(false)
        setDescription({
            value: productData!.description,
            inputValue: productData!.description
        })

    }



    useEffect(() => {
        if (productData) {
            updateDescription(productData.description)
        }
    }, [productData, updateDescription])

    return (
        <section id='mainSection' className={`rounded-lg border-2 border-gray-300 md:grid ${isLoadingUpdateProduct ? "opacity-50" : "opacity-100"} ${appConfig?.hasUserSection ? "md:grid-cols-[1fr,0.7fr] md:gap-4" : "grid-cols-1"}  `}>
            <div className=' space-y-5'>
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
                        (page === "edit-product" && isEditing) &&
                        <ReactQuill theme="snow" value={description.value} onChange={updateDescription} />
                    }
                    <div className={`${isEditing ? "hidden" : "block"}`} ref={descriptionWrapper} />
                    {
                        (page === "edit-product") &&
                        <div className='flex items-center justify-end ml-auto space-x-4 '>
                            {
                                isEditing &&
                                <button onClick={onCancelClick} className={`text-primary px-3 py-1`}>Cancel</button>
                            }

                            {
                                isEditing ?
                                    <button onClick={updateMainSection} className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
                                        <CheckIcon className='h-4 w-4 text-white' />
                                        <span>Save</span>
                                    </button>
                                    :
                                    <button onClick={() => setIsEditing(true)} className={`bg-primary text-white px-3 py-1 rounded-lg`}>
                                        <span >Edit</span>
                                    </button>
                            }

                        </div>
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