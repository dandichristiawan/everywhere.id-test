import React from 'react'
import { PostComments } from '@/lib/definitions'
import { SpinnerMd } from '@/components/spinner/md'


type Props = {
    countProps: PostComments | undefined
}

export const SkeletonComments: React.FC<Props> = ({ countProps }) => {

    const skeletonCount = countProps ? countProps.comments.length : 3;

    return (
        <>
            <div className='flex flex-col justify-start w-full mt-7 '>
                <h1 className='text-xl font-semibold mb-2'>Comments</h1>
                <div className="flex flex-row gap-1 justify-end mb-2">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">0</span> to <span className="font-semibold text-gray-900 dark:text-white">0</span> of <span className="font-semibold text-gray-900 dark:text-white">0</span> Comments
                </div>
                <div className="overflow-y-auto max-h-60 shadow-md">
                    {Array.from({ length: skeletonCount }).map((_, index) => (
                        <div key={index} className='m-4 bg-gray-200 p-2 flex flex-row justify-between rounded-md animate-pulse'>
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
                <div className="flex justify-center">
                    <button disabled className='p-2 mt-4 border border-gray-400 rounded-full w-1/4 items-center shadow-md'>
                        <SpinnerMd />
                    </button>
                </div>
            </div>
        </>
    )
}
