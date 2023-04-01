import { CheckIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { useOutletContext } from 'react-router-dom';
import { ProductSectionTypes } from './types'

function VideoSection({ page }: ProductSectionTypes) {
    const [isEditing, setIsEditing] = useState(page === "edit-product");
    const productData = useOutletContext<any>();

    return (
        <section id='videoSection' className='rounded-lg border-2 border-gray-300 p-2 pt-10 md:p-4'>
            <h2 className='font-bold'>Video</h2>
            {
                (page === "edit-product" && isEditing) ?
                    <div className='space-y-4'>
                        <input
                            type="text"
                            placeholder='Add a youtube or vimeo link'
                            className='w-full p-2 border border-gray-300 rounded-lg'
                        />
                        <div className='flex items-center justify-end ml-auto space-x-4 opacity-40'>
                            <button className={`text-primary px-3 py-1`}>Cancel</button>
                            <button className={`bg-primary text-white flex items-center space-x-2 px-3 py-1 rounded-lg`}>
                                <CheckIcon className='h-4 w-4 text-white' />
                                <span>Save</span>
                            </button>
                        </div>
                    </div>

                    :
                    <iframe
                        src={productData?.video.replace("watch?v=", "embed/")}
                        title="company-youtube-link"
                        className='w-full max-w-[700px] mx-auto aspect-square h-[400px]'
                        allowFullScreen
                    />


            }

        </section>
    )
}

export default VideoSection