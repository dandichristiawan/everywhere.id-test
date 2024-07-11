import { Bagde } from '@/components/badge'
import React from 'react'

type Props = {
  postTitle: string
  postBody: string
  position: string
  postTag: string[] | undefined
}

export const PostContent: React.FC<Props> = ({ postTitle, postBody, postTag, position }) => {
  return (
    <>
      <div className={`flex justify-${position} w-full mb-2`}>
        <h1 className="font-bold text-4xl px-4 md:px-0 pt-2">{postTitle}</h1>
      </div>
      <div className="my-2">
        <p className='text-justify text-lg px-4 md:px-0'>{postBody}</p>
      </div>
      <div className="flex flex-row justify-start w-full">
        <div className="flex justify-center items-center">
          <p className='font-semibold pl-4 md:p-0 text-sm md:hidden '>tags:</p>
        </div>
        <Bagde tags={postTag} />
      </div>
    </>
  )
}
