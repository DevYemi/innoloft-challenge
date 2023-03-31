import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css';
import DetailsSection from '@/components/DetailsSection';
import VideoSection from '@/components/VideoSection';
import MainSection from '@/components/MainSection';

function EditProductPage() {

    return (
        <div className='px-2 py-4 space-y-5'>
            <div className='flex justify-between items-center'>
                <h2 className='font-bold'>Offer Title</h2>
                <Link to={"/product/edit"} className={`block font-semibold p-1 bg-primary text-white rounded-md`}>
                    View Offer
                </Link>
            </div>

            <MainSection page="edit-product" />

            <VideoSection page='edit-product' />

            <DetailsSection page='edit-product' />

        </div>
    )
}

export default EditProductPage