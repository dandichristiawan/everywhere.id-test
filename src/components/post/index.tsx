"use client"
import { Bagde } from '@/components/badge'
import { PostComments, SinglePost } from '@/lib/definitions'
import { Spinner } from '@/components/spinner'
import { commentsApi, singlePostApi } from '@/lib/getBlogPost'
import React, { useEffect, useState } from 'react'
import { PostStats } from '@/components/post/post-stats'
import { PostContent } from '@/components/post/post-content'
import { Comments } from './comments'
import { SkeletonComments } from './comments/skeletons/skeletons-comment'


type Props = {
    postId: string
}

export const PostMain: React.FC<Props> = ({ postId }) => {

    const [post, setPost] = useState<SinglePost>()
    const [comment, setComment] = useState<PostComments>()
    const [errorPost, setErrorPost] = useState<string | unknown>(null)
    const [isPending, setIsPending] = useState<boolean>(false)
    const [isCommentPending, setIsCommentPending] = useState<boolean>(false)


    useEffect(() => {
        async function getOnePost() {
            setIsPending(true)
            try {
                const data = await singlePostApi(postId)
                setPost(data)
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
                const comment = await commentsApi(postId)
                setComment(comment)
            } catch (error) {
                console.error(error)
            } finally {
                setIsCommentPending(false)
            }
        }
        getComments()
    }, [])


    if (errorPost) <div>"Error"</div>

    if (isPending) return <Spinner />

    if (post)
        return (
            <>
                <main className='min-h-screen max-w-4xl mx-auto items-center flex flex-col justify-center'>
                    <PostContent postBody={post.body} postTitle={post.title} position='start' />
                    <PostStats position='end' views={post.views} reactions={post.reactions} />
                    <Bagde position='start' tags={post.tags} />
                    {isCommentPending ? (
                        <>
                            <SkeletonComments />
                        </>
                    ) : (
                        <>
                            <Comments commentProps={comment} />
                        </>
                    )}
                </main>
            </>
        )
}
