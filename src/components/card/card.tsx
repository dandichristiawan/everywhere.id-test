import React from 'react'
import Link from 'next/link'
import { Post } from '@/lib/definitions'
import { Bagde } from '@/components/badge'
import { PostStats } from '../post/post-stats'



type Props = {
    post: Post
}
export const Card: React.FC<Props> = ({ post }) => {
    return (
        <div className='p-4 border border-gray-300 border-l-0 border-r-0 justify-center'>
            <h2 className='text-2xl mb-2'>{post.title}</h2>
            <p className='text-md mb-2'>{post.body.length > 100 ? `${post.body.substring(0, 100)}...` : post.body}</p>
            <div className="flex flex-row justify-between">
                <PostStats views={post.views} reactions={post.reactions} position='start' />
                <div className="flex">
                    <Link href={`/post/${post.id}`} className='text-blue-600'>
                        Read more...
                    </Link>
                </div>
            </div>
        </div>
    )
}
