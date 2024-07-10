import React from 'react'

type Props = {
    views: number
    reactions?: {
        likes: number
        dislikes: number
    }
    position: string
    widthProps?: string | undefined
}

export const PostStats: React.FC<Props> = ({ views, reactions, position, widthProps }) => {
    return (
        <div className={`flex flex-row gap-2 justify-${position} w-${widthProps}`}>
            <div className="flex flex-row items-center">👀<p className='text-sm text-center font-semibold'>{views}</p></div>
            <div className="flex flex-row items-center">👍<p className='text-sm text-center font-semibold'>{reactions?.likes}</p></div>
            <div className="flex flex-row items-center">👎<p className='text-sm text-center font-semibold'>{reactions?.dislikes}</p></div>
        </div>
    )
}
