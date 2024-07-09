import { getBlogPosts } from "@/lib/getBlogPost"
import PostList from "@/components/postLists/post-list";

export default async function Home() {

    const { posts, isLoading, error } = await getBlogPosts()

    if (isLoading) return <div>Loading...</div>

    if (error) return <div>Error: {error.message}</div>

    if (posts) return <PostList posts={posts} />


}