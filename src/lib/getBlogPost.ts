"use server"

import { Post, PostComments, PostResponse } from "./definitions"

export async function allPostApi(): Promise<PostResponse> {
    const res = await fetch('https://dummyjson.com/posts?limit=6&skip=6')
    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json()
    return data as PostResponse;

}

export async function singlePostApi(postId: string) {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)

    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json();
    return data as Post;
}

export async function commentsApi(postId: string) {
    const res = await fetch(`https://dummyjson.com/posts/${postId}/comments`)

    if (!res.ok) {
        throw new Error('Something went wrong')
    }

    const data = await res.json();
    console.log(data)
    return data as PostComments;

}
