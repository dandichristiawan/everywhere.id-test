'use client';

import { Post } from "@/lib/definitions"
import { Card } from '@/components/card/card';
import { Spinner } from '@/components/spinner';
import { allPostApi } from '@/lib/getBlogPost';
import React, { useEffect, useState } from 'react';

export const List = () => {

    const [posts, setPosts] = useState<Post[]>([]);
    const [error, setError] = useState<string | unknown>(null);
    const [isPending, setIsPending] = useState<boolean>(false);

    useEffect(() => {
        async function getAllPost() {
            setIsPending(true);
            try {
                const data = await allPostApi()
                setPosts(data.posts);
            } catch (error) {
                setError(error);
            } finally {
                setIsPending(false);
            }
        }
        getAllPost()
    }, [])

    if (error) <div>"Error"</div>

    if (isPending) return <Spinner />

    if (posts)
        return (
            <>
                <main className="min-h-dvh max-w-9xl flex flex-col justify-center mx-auto">
                    {posts.map((p) => (
                        <Card key={p.id} post={p} />
                    ))}
                    
                </main>
            </>
        )
};

