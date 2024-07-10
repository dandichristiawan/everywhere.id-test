"use server"

import { Post, PostComments, PostResponse } from "./definitions"

export async function allPostApi(skip: number): Promise<PostResponse> {
    const res = await fetch(`https://dummyjson.com/posts?limit=6&skip=${skip}`)
    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data as PostResponse;

}

export async function singlePostApi(postId: string): Promise<Post> {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)

    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json();
    return data as Post;
}

export async function commentsApi(skipComments: number): Promise<PostComments> {
    const res = await fetch(`https://dummyjson.com/comments/?limit=3&skip=${skipComments}`)

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    const data = await res.json();
    return data as PostComments;

}
