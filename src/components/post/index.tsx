"use client"

import React from 'react'
import { Bagde } from '@/components/badge'
import { Comment } from '@/components/post/comments/'
import { PostStats } from '@/components/post/post-stats'
import { SpinnerXl } from '@/components/spinner/xl'
import { PostContent } from '@/components/post/post-content'
import { PostComments, Post } from '@/lib/definitions'
import { commentsApi, singlePostApi } from '@/lib/api'
import { SkeletonComments } from './comments/skeletons/skeletons-comment'


type Props = {
    postId: string
}

export const PostMain: React.FC<Props> = ({ postId }) => {
    const [skip, setSkip] = React.useState<number>(0)
    const [post, setPost] = React.useState<Post>()
    const [isPending, setIsPending] = React.useState<boolean>(false)
    const [errorPost, setErrorPost] = React.useState<string | unknown>(null)
    const [comment, setComment] = React.useState<PostComments>()
    const [isCommentPending, setIsCommentPending] = React.useState<boolean>(false)


    React.useEffect(() => {
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

    React.useEffect(() => {
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
                    <PostContent postBody={post.body} postTitle={post.title} postTag={post.tags} position='start' />
                    <div className="flex flex-col px-4 md:p-0 md:flex-row justify-center w-full">
                        <PostStats views={post.views} reactions={post.reactions} widthProps="full" />
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
