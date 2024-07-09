'use client';

import React from 'react';
import { Card } from '@/components/card/card';
import { Post } from "@/lib/definitions"

type Props = {
    posts: Post[];
}

const PostList: React.FC<Props> = ({ posts }) => {
    return (
        <div>
            <h1>Blog Posts</h1>
            <div className="">
                {posts.map(post => (
                    <Card key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default PostList;
