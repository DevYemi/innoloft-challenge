import React from 'react'
import { ProductSectionTypes } from './types'

function VideoSection({ page }: ProductSectionTypes) {
    return (
        <section id='videoSection' className='rounded-lg border-2 border-gray-300 p-2 pt-10 md:p-4'>
            <h2 className='font-bold'>Video</h2>
            {
                page === "edit-product" ?
                    <input
                        type="text"
                        placeholder='Add a youtube or vimeo link'
                        className='w-full p-2 border border-gray-300 rounded-lg'
                    />
                    :
                    <div className='w-full max-w-[700px] mx-auto aspect-square h-[400px] bg-gray-500 '>

                    </div>
            }

        </section>
    )
}

export default VideoSection