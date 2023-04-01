import React, { MouseEvent, useEffect, useState } from 'react'
import { CheckIcon, PlusIcon, XMarkIcon } from "@heroicons/react/24/solid"
import { Cog8ToothIcon, BriefcaseIcon, ClockIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import { ChangesType, formDetailsType, ProductSectionTypes } from './types'
import { useOutletContext } from 'react-router-dom';
import { useGetTrlListQuery } from '@/redux-toolkit/api/trlSlice';
import { nanoid } from '@reduxjs/toolkit';
import { useUpdateProductMutation } from '@/redux-toolkit/api/productSlice';
import { ProductDataType } from '@/redux-toolkit/types';






function DetailsSection({ page }: ProductSectionTypes) {
    const [isEditing, setIsEditing] = useState(page === "edit-product");
    const [technology, setTechnology] = useState<formDetailsType>({ list: [], inputValue: "" });
    const [businessModel, setBusinessModel] = useState<formDetailsType>({ list: [], inputValue: "" });
    const [investmentCost, setInvestmentCost] = useState<formDetailsType>({ value: "", inputValue: "" });
    const [trl, setTrl] = useState<formDetailsType>({ value: "", inputValue: "" });


    const productData = useOutletContext<ProductDataType | undefined>();
    const { data: trlDataList } = useGetTrlListQuery("");
    const [updateProductTrigger, { isLoading: isLoadingUpdateProduct }] = useUpdateProductMutation()


    const handleTechnologyChanges = (type: ChangesType, id: string) => {

        if (type === "Add") {
            const newArr = [...technology.list!, { id, name: technology.inputValue }] as ProductDataType["categories"]
            setTechnology({
                inputValue: "",
                list: newArr
            })
        } else {
            const newArr = technology.list!.filter((item: any) => item.id !== id);
            setTechnology({
                inputValue: "",
                list: newArr
            })
        }
    }
    const handleBusinessChanges = (type: ChangesType, id: string) => {

        if (type === "Add") {
            const newArr = [...businessModel.list!, { id, name: businessModel.inputValue }] as ProductDataType["businessModels"]
            setBusinessModel({
                inputValue: "",
                list: newArr
            })
        } else {
            const newArr = businessModel.list!.filter((item: any) => item.id !== id);
            setBusinessModel({
                inputValue: "",
                list: newArr
            })
        }
    }

    const updateDetailsSection = async () => {
        try {
            const objectData = {
                ...productData,
                productId: productData!.id,
                businessModels: businessModel.list,
                categories: technology.list,
                trl: trlDataList?.filter((item => item.id === trl.inputValue)),
                investmentEffort: investmentCost.inputValue

            }

            // make request to db
            await updateProductTrigger(objectData).unwrap()

            setIsEditing(false);

        } catch (error) {
            console.log(error)
        }
    }


    const onCancelClick = () => {
        setIsEditing(false)
        if (productData) {
            setTechnology({
                inputValue: "",
                list: productData.categories
            })
            setBusinessModel({
                inputValue: "",
                list: productData.businessModels
            })
            setInvestmentCost({
                inputValue: productData.investmentEffort,
                value: productData.investmentEffort
            })
            setTrl({
                inputValue: productData.trl.id.toString(),
                value: productData.trl.name
            })
        }

    }





    useEffect(() => {
        // update all form state on first render
        if (productData) {
            setTechnology({
                inputValue: "",
                list: productData.categories
            })
            setBusinessModel({
                inputValue: "",
                list: productData.businessModels
            })
            setInvestmentCost({
                inputValue: productData.investmentEffort,
                value: productData.investmentEffort
            })
            setTrl({
                inputValue: productData.trl.id.toString(),
                value: productData.trl.name
            })
        }
    }, [productData])

    // console.log(productData)


    return (
        <section id='detailsSection' className={`rounded-lg border-2 border-gray-300 p-2 pt-10 space-y-4 ${isLoadingUpdateProduct ? "opacity-50" : ""}`}>
            <h2 className='font-bold'>Offer details</h2>
            <div className='space-y-4 md:grid md:grid-cols-2 md:gap-10 md:items-center md:space-y-0'>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <Cog8ToothIcon className='h-5 w-5' />
                        <span className='text-sm'>Technology</span>
                    </p>
                    {
                        (page === "edit-product" && isEditing) &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                name='technology'
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                                value={technology.inputValue}
                                onChange={(e) => setTechnology({ ...technology, inputValue: e.target.value })}
                            />
                            <button onClick={() => handleTechnologyChanges("Add", nanoid())} className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }
                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3'>
                        {
                            technology.list?.map(cat => (
                                <span key={cat.id} className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                                    <small className='truncate'>{cat.name}</small>
                                    {
                                        (page === "edit-product" && isEditing) &&
                                        <small onClick={() => handleTechnologyChanges("Remove", cat.id.toString())}> <XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                                    }

                                </span>
                            ))
                        }

                    </p>
                </div>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <BriefcaseIcon className='h-5 w-5' />
                        <span className='text-sm'>Business Model</span>
                    </p>
                    {
                        (page === "edit-product" && isEditing) &&
                        <div className='flex items-center space-x-4'>
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                placeholder='Add new lable...'
                                value={businessModel.inputValue}
                                onChange={(e) => setBusinessModel({ ...businessModel, inputValue: e.target.value })}
                            />
                            <button onClick={() => handleBusinessChanges("Add", nanoid())} className={`bg-primary p-2 rounded-lg cursor-pointer`}>
                                <PlusIcon className='w-3 h-3 text-white' />
                            </button>
                        </div>
                    }
                    <p className='grid grid-cols-[repeat(auto-fill,_minmax(100px,_1fr))] gap-3'>
                        {
                            businessModel.list?.map(bus => (
                                <span key={bus?.id} className='flex  justify-between items-center space-x-4 bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                                    <small className='truncate'>{bus.name}</small>
                                    {
                                        (page === "edit-product" && isEditing) &&
                                        <small onClick={() => handleBusinessChanges("Remove", bus.id.toString())}><XMarkIcon className={`w-3 h-3 cursor-pointer text-primary`} /></small>
                                    }

                                </span>
                            ))
                        }
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
                        (page === "edit-product" && isEditing) ?
                            <select
                                name="trl"
                                className='border w-full border-sec-gray px-2 py-1 rounded-lg text-xs'
                                value={trl.inputValue}
                                onChange={(e) => setTrl({
                                    value: trlDataList?.find(item => item.id === e.target.value)?.name,
                                    inputValue: e.target.value
                                })
                                }
                            >
                                {
                                    trlDataList?.map(trl => (
                                        <option key={trl.id} value={trl.id}>{trl.name}</option>
                                    ))
                                }
                            </select>
                            :
                            <p className='grid grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))] gap-3'>
                                <span className=' bg-sec-gray py-1 px-2 rounded-lg text-xs'>
                                    <small>
                                        {trl.value}
                                    </small>

                                </span>
                            </p>
                    }


                </div>
                <div className=' text-[#6B7280] space-y-2'>
                    <p className='flex items-center space-x-2'>
                        <BanknotesIcon className='h-5 w-5' />
                        <span className='text-sm'>Costs</span>
                    </p>
                    {
                        (page === "edit-product" && isEditing) ?
                            <input
                                type="text"
                                className='border border-sec-gray px-2 py-1 rounded-lg text-xs'
                                value={investmentCost.inputValue}
                                onChange={(e) => setInvestmentCost({ ...investmentCost, inputValue: e.target.value })}
                            />
                            :
                            <p className='grid grid-cols-[repeat(auto-fill,_minmax(80px,_1fr))] gap-3'>
                                <span className='truncate bg-sec-gray py-1 px-2 rounded-3xl text-xs'>
                                    <small>{investmentCost.inputValue}</small>
                                </span>
                            </p>
                    }

                </div>
            </div>
            {
                (page === "edit-product") &&
                <div className='flex items-center justify-end ml-auto space-x-4 '>
                    {
                        isEditing &&
                        <button onClick={onCancelClick} className={`text-primary px-3 py-1`}>Cancel</button>
                    }

                    {
                        (page === "edit-product" && isEditing) ?
                            <button onClick={updateDetailsSection} className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
                                <CheckIcon className='h-4 w-4 text-white' />
                                <span>Save</span>
                            </button>
                            :
                            <button onClick={() => setIsEditing(true)} className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
                                <CheckIcon className='h-4 w-4 text-white' />
                                <span >Edit</span>
                            </button>
                    }

                </div>
            }


        </section>
    )
}

export default DetailsSection