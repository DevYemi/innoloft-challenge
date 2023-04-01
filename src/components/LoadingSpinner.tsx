import { useGetAppConfigurationQuery } from '@/redux-toolkit/api/appConfigurationSlice';
import React from 'react'
import { Circles } from 'react-loader-spinner'

function LoadingSpinner() {
    const { data: appConfig } = useGetAppConfigurationQuery(import.meta.env.VITE_APP_ID);
    return (
        <div className='flex justify-center items-center h-full'>
            <Circles
                height="80"
                width="80"
                color={appConfig?.mainColor}
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />

        </div>
    )
}

export default LoadingSpinner