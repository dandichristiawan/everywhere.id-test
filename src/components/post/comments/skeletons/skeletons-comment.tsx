import { PostComments } from '@/lib/definitions'
import React from 'react'

type Props = {
    countProps: PostComments | undefined
}

export const SkeletonComments: React.FC<Props> = ({ countProps }) => {

    const skeletonCount = countProps ? countProps.comments.length : 3;

    return (
        <>
            <div className='flex flex-col justify-start w-full mt-7'>
                {Array.from({ length: skeletonCount }).map((_, index) => (
                    <div key={index} className='mb-4 bg-gray-200 p-2 flex flex-row justify-between rounded-md animate-pulse'>
                        <div className="flex flex-col">
                            <div className='h-4 bg-gray-300 mb-2 w-48'></div>
                            <div className='h-4 bg-gray-300 w-64'></div>
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
