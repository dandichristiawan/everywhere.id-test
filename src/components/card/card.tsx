import React from 'react'
import Link from 'next/link'
import { Post } from '@/lib/definitions'


type Props = {
    post: Post
}
export const Card: React.FC<Props> = ({ post }) => {
    return (
        <div className='p-7 border border-gray-300 border-l-0 border-r-0 border-t-0 justify-center'>
            <Link href={`/post/${post.id}`} className='text-blue-600'>
                <h2 className='text-xl md:text-2xl mb-2 text-balance'>{post.title}</h2>
            </Link>
            <p className='text-md mb-4'>{post.body.length > 160 ? `${post.body.substring(0, 160)}...` : post.body}</p>
        </div >
    )
}
