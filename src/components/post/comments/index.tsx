import React from 'react'
import { PostComments } from '@/lib/definitions'

type Props = {
    commentProps: PostComments | undefined
}

export const Comments: React.FC<Props> = ({ commentProps }) => {
    return (
        <div className="flex flex-col justify-start w-full mt-7">
            <h1 className='text-xl font-semibold mb-2'>Comments</h1>
            {commentProps?.comments.length === 0 ?
                <>
                    <p className='text-gray-500 text-center p-20'>No comments yet</p>
                </> :
                <>
                    {commentProps?.comments.map((c) => (
                        <div key={c.id} className='mb-4 bg-gray-200 p-2 flex flex-row justify justify-between rounded-md '>
                            <div className="flex flex-col">
                                <p className='mb-2'>{c.user.fullName}</p>
                                <p>{c.body}</p>
                            </div>
                            <div className="flex flex-row items-center ">
                                <p className='text-red-600 mr-1'>♥</p>
                                <p>{c.likes}</p>
                            </div>
                        </div>
                    ))}
                </>
            }
        </div>
    )
}
