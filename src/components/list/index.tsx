'use client';

import { Post, PostResponse } from "@/lib/definitions"
import { Card } from '@/components/card/card';
import { SpinnerXl } from '@/components/spinner/xl';
import { allPostApi } from '@/lib/getBlogPost';
import React, { useEffect, useState } from 'react';
import { Pagination } from "../pagination";

export const List = () => {
    const [skip, setSkip] = useState<number>(0);
    const [post, setPost] = useState<PostResponse>();
    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | unknown>(null);
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        async function getAllPost() {
            setIsPending(true);
            try {
                const data = await allPostApi(skip)
                setPost(data)
                setPosts(data.posts)
            } catch (error) {
                setError(error);
            } finally {
                setIsPending(false);
            }
        }
        getAllPost()
    }, [skip])

    if (error) <div>"Error"</div>

    if (isPending) return <SpinnerXl />

    if (posts)
        return (
            <>
                <main className="min-h-dvh max-w-9xl flex flex-col justify-center mx-auto">
                    <Pagination totalEntries={post?.total} skip={skip} limit={post?.limit} nextPage={setSkip} />
                    {posts.map((p) => (
                        <Card key={p.id} post={p} />
                    ))}
                </main>
            </>
        )
};

