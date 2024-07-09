import { PostMain } from '@/components/post';

export default function Post({ params: { id }, }: { params: { id: string }; }) {
    return <PostMain postId={id} />
}
