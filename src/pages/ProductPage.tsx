import { Link } from 'react-router-dom'
import DetailsSection from '@/components/DetailsSection'
import VideoSection from '@/components/VideoSection'
import MainSection from '@/components/MainSection'
import { useOutletContext } from "react-router-dom";

function ProductPage() {


    return (
        <div className='px-2 py-4 space-y-5'>
            <Link to={"/product/edit"} className={`block w-fit font-semibold p-3 bg-primary text-white rounded-md`}>
                Edit
            </Link>

            <MainSection page='product' />

            <VideoSection page='product' />

            <DetailsSection page='product' />

        </div>
    )
}

export default ProductPage