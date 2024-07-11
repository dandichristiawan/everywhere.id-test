import React from 'react'

type Props = {
    views: number
    reactions?: {
        likes: number
        dislikes: number
    }
    widthProps?: string | undefined
}

export const PostStats: React.FC<Props> = ({ views, reactions, widthProps }) => {
    return (
        <div className={`flex flex-row border border-l-0 border-r-0 px-1 md:p-0 mt-4 md:m-0 justify-between md:justify-start gap-2 w-${widthProps}`}>
            <div className="flex flex-row items-center p-2 ml-2 md:m-0">
                <span className='text-xs mr-2'>
                    👀
                </span>
                <p className='text-xs text-center font-semibold'>
                    {views}
                </p>
            </div>
            <div className="flex flex-row items-center p-2 mr-4 md:m-0">
                <span className='text-xs mr-2'>
                    👍
                </span>
                <p className='text-xs text-center font-semibold'>
                    {reactions?.likes}
                </p>
            </div>
            <div className="flex flex-row items-center p-2 mr-4 md:m-0">
                <span className='text-xs mr-2'>
                    👎
                </span>
                <p className='text-xs text-center font-semibold'>
                    {reactions?.dislikes}
                </p>
            </div>
        </div>
    )
}
