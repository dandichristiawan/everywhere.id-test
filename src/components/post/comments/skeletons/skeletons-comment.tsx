import React from 'react'

export const SkeletonComments = () => {
    return (
        <>
            <div className='flex flex-col justify-start w-full mt-7'>
                {[1, 2, 3].map((skeletonItem) => (
                    <div key={skeletonItem} className='mb-4 bg-gray-200 p-2 flex flex-row justify justify-between rounded-md animate-pulse'>
                        <div className="flex flex-col">
                            <div className='h-4 bg-gray-300 mb-2'></div>
                            <div className='h-4 bg-gray-300'></div>
                        </div>
                        <div className="flex flex-row items-center">
                            <div className='h-4 bg-gray-300 w-4 rounded-full'></div>
                            <div className='h-4 bg-gray-300 ml-1 w-6'></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
