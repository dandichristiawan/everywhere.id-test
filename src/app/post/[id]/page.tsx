import { getSinglePosts } from '@/lib/getBlogPost';

export default async function Post({ params: { id }, }: { params: { id: string }; }) {
    const { title, body, views, userId, reactions, tags } = await getSinglePosts(id);
    return (
        <>
            <div className="">{title}</div>
            <div className="">{body}</div>
            <div className="">{views}</div>
            <div className="">{userId}</div>
            <div className="">{reactions?.likes}</div>
            <div className="">{reactions?.dislikes}</div>
            <div className="">{tags}</div>
        </>
    )
}
