'use client';

import React from 'react';
import { allPostApi } from '@/lib/api';
import { Card } from '@/components/card/card';
import { SpinnerXl } from '@/components/spinner/xl';
import { Pagination } from "@/components/pagination";
import { Post, PostResponse } from "@/lib/definitions"

export const List = () => {
    const [skip, setSkip] = React.useState<number>(0);
    const [post, setPost] = React.useState<PostResponse>();
    const [posts, setPosts] = React.useState<Post[]>([]);
    const [error, setError] = React.useState<string | unknown>(null);
    const [isPending, setIsPending] = React.useState<boolean>(false);

    React.useEffect(() => {
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

    if (error) <div>Error</div>

    if (isPending) return <SpinnerXl />

    if (posts)
        return (
            <>
                <main data-testid='list' className="min-h-dvh max-w-9xl flex flex-col justify-center mx-auto">
                    {posts.map((p) => (
                        <Card key={p.id} post={p} />
                    ))}
                    <Pagination posts={post} totalEntries={post?.total} skip={skip} limit={post?.limit} nextPage={setSkip} />
                </main>
            </>
        )
};

