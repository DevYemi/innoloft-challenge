import { useUpdateProductMutation } from '@/redux-toolkit/api/productSlice';
import { ProductDataType } from '@/redux-toolkit/types';
import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { formDetailsType, ProductSectionTypes } from './types'

function VideoSection({ page }: ProductSectionTypes) {
    const [isEditing, setIsEditing] = useState(page === "edit-product");
    const productData = useOutletContext<ProductDataType | undefined>();
    const [updateProductTrigger, { isLoading: isLoadingUpdateProduct }] = useUpdateProductMutation()

    const [videoData, setVideoData] = useState<formDetailsType>({ value: "", inputValue: "" });


    const updateVideoSection = async () => { // update video url at the backend
        try {
            const objectData = {
                ...productData,
                productId: productData?.id,
                video: videoData.inputValue

            }

            // make request to db
            await updateProductTrigger(objectData).unwrap()

            setIsEditing(false);

        } catch (error) {
            console.log(error)
        }
    }

    const onCancelClick = () => { // reset all values
        setIsEditing(false)
        setVideoData({
            value: productData!.video,
            inputValue: productData!.video
        })
    }

    useEffect(() => {
        if (productData) {
            setVideoData({
                value: productData.video,
                inputValue: productData.video
            })
        }
    }, [productData])

    return (
        <section id='videoSection' className={`rounded-lg border-2 border-gray-300 p-2 pt-10 md:p-4 ${isLoadingUpdateProduct ? "opacity-50" : "opacity-100"}`}>
            <h2 className='font-bold'>Video</h2>
            {

                <div className='space-y-4'>
                    {
                        (page === "edit-product" && isEditing) ?
                            <input
                                type="text"
                                placeholder='Add a youtube or vimeo link'
                                className='w-full p-2 border border-gray-300 rounded-lg'
                                value={videoData.inputValue}
                                onChange={(e) => setVideoData({ ...videoData, inputValue: e.target.value })}
                            />
                            :
                            <iframe
                                src={videoData.value?.replace("watch?v=", "embed/")}
                                title="company-youtube-link"
                                className='w-full max-w-[700px] mx-auto aspect-square h-[400px]'
                                allowFullScreen
                            />
                    }

                    {
                        (page === "edit-product") &&
                        <div className='flex items-center justify-end ml-auto space-x-4 '>
                            {
                                isEditing &&
                                <button onClick={onCancelClick} className={`text-primary px-3 py-1`}>Cancel</button>
                            }

                            {
                                (page === "edit-product" && isEditing) ?
                                    <button onClick={updateVideoSection} className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
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

            }

        </section>
    )
}

export default VideoSection