import React from 'react'
import { PostComments } from '@/lib/definitions'

type Props = {
    onLoad: () => void
    commentProps: PostComments | undefined
}

export const Comment: React.FC<Props> = ({ commentProps, onLoad }) => {
    let start = commentProps?.skip! + 1
    let end = Math.min(commentProps?.skip! + commentProps?.limit!, commentProps?.total!)
    const hasMore = commentProps && commentProps.comments.length >= commentProps.total

    return (
        <div className="flex flex-col justify-start w-full mt-7 px-4 md:p-0">
            <h1 className='text-center md:text-left text-xl font-semibold mb-2'>Comments</h1>
            {commentProps?.comments.length === 0 ?
                <>
                    <p className='text-gray-500 text-center p-20'>No comments yet</p>
                </> :
                <>
                    <div className="overflow-y-auto max-h-60 shadow-md">
                        {commentProps?.comments.map((c, index) => (
                            <div key={index} className='m-4 bg-gray-200 p-2  flex flex-row justify justify-between rounded-md '>
                                <div className="flex flex-col">
                                    <p className='mb-2 font-bold'>{c.user.fullName}</p>
                                    <p>{c.body}</p>
                                </div>
                                <div className="flex flex-row items-center ">
                                    <p className='text-red-600 mr-1'>♥</p>
                                    <p>{c.likes}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-row gap-1 justify-center mt-2 ">
                        Showing <span className="font-semibold text-gray-900">{start}</span> to <span className="font-semibold text-gray-900">{end}</span> of <span className="font-semibold text-gray-900">{commentProps?.total}</span> Comments
                    </div>
                    {!hasMore && (
                        <div className="flex justify-center">
                            <button onClick={onLoad} className='p-2 md:p-2 mt-4 md:mt-4 text-sm border border-gray-400 rounded-full w-1/3 md:w-1/4 items-center shadow-md'> Load More </button>
                        </div>
                    )}
                </>
            }
        </div>
    )
}
