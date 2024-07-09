import React from 'react'

type Props = {
    views: number
    reactions?: {
        likes: number
        dislikes: number
    }
    position: string
}

export const PostStats: React.FC<Props> = ({ views, reactions, position }) => {
    return (
        <div className={`flex flex-row justify-${position} w-full`}>
            <div className="flex flex-row p-2 items-center">👀<p className='text-sm text-center font-semibold'>{views}</p></div>
            <div className="flex flex-row p-2 items-center">👍<p className='text-sm text-center font-semibold'>{reactions?.likes}</p></div>
            <div className="flex flex-row p-2 items-center">👎<p className='text-sm text-center font-semibold'>{reactions?.dislikes}</p></div>
        </div>
    )
}
