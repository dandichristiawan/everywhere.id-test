"use client"
import { Bagde } from '@/components/badge'
import { SpinnerXl } from '@/components/spinner/xl'
import { PostComments, Post } from '@/lib/definitions'
import { PostStats } from '@/components/post/post-stats'
import React, { useEffect, useState } from 'react'
import { PostContent } from '@/components/post/post-content'
import { commentsApi, singlePostApi } from '@/lib/getBlogPost'
import { SkeletonComments } from './comments/skeletons/skeletons-comment'
import { Comment } from '@/components/post/comments/'


type Props = {
    postId: string
}

export const PostMain: React.FC<Props> = ({ postId }) => {
    const [skip, setSkip] = useState<number>(0)
    const [post, setPost] = useState<Post>()
    const [isPending, setIsPending] = useState<boolean>(false)
    const [errorPost, setErrorPost] = useState<string | unknown>(null)
    const [comment, setComment] = useState<PostComments>()
    const [isCommentPending, setIsCommentPending] = useState<boolean>(false)


    useEffect(() => {
        async function getOnePost() {
            setIsPending(true)
            try {
                const res = await singlePostApi(postId)
                setPost(res)
            } catch (error) {
                setErrorPost(error)
            } finally {
                setIsPending(false)
            }
        }
        getOnePost()
    }, [])

    useEffect(() => {
        async function getComments() {
            setIsCommentPending(true)
            try {
                const res = await commentsApi(skip)
                setComment((prevState) => ({
                    comments: [...(prevState?.comments || []), ...res.comments],
                    total: res.total,
                    skip: res.skip,
                    limit: res.limit
                }))
            } catch (error) {
                console.error(error)
            } finally {
                setIsCommentPending(false)
            }
        }
        getComments()
    }, [skip])

    const onLoadMore = () => {
        setSkip((prevSkip) => prevSkip + 3);
    };

    if (errorPost) <div>"Error"</div>

    if (isPending) return <SpinnerXl />

    if (post)
        return (
            <>
                <main className='min-h-screen max-w-4xl mx-auto items-center flex flex-col justify-center'>
                    <PostContent postBody={post.body} postTitle={post.title} position='start' />
                    <div className="flex flex-row justify-between w-full">
                        <PostStats views={post.views} reactions={post.reactions} widthProps="full" />
                        <Bagde position='end' tags={post.tags} />
                    </div>
                    {isCommentPending ? (
                        <>
                            <SkeletonComments countProps={comment} />
                        </>
                    ) : (
                        <>

                            <Comment commentProps={comment} onLoad={onLoadMore} />

                        </>
                    )}
                </main>
            </>
        )
}
