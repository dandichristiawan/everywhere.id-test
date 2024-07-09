import { SinglePost } from "./definitions"

export async function getBlogPosts() {
    const res = await fetch('https://dummyjson.com/posts')

    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    return res.json()

}

export async function getSinglePosts(postId: string) {
    const res = await fetch(`https://dummyjson.com/posts/${postId}`)

    if (!res.ok) {
        throw new Error('Something went wrong')
    }
    const data = await res.json();
    return data as SinglePost;
}
