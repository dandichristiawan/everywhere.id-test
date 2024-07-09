
import { Post } from '@/lib/definitions'
import Link from 'next/link'
import React from 'react'

type Props = {
    post: Post
}
export const Card: React.FC<Props> = ({ post }) => {
    return (
        <Link href={`/post/${post.id}`}>
            <div className='cursor-pointer rounded-md p-2 bg-slate-400 m-2 '>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <p>{post.views}</p>
            </div>
        </Link>
    )
}
