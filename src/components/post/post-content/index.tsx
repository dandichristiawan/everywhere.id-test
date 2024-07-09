import React from 'react'

type Props = {
  postTitle: string
  postBody: string
  position: string
}

export const PostContent: React.FC<Props> = ({ postTitle, postBody, position }) => {
  return (
    <>
      <div className={`flex justify-${position} w-full`}>
        <h1 className="font-bold text-4xl">{postTitle}</h1>
      </div>
      <div className="my-2">
        <p className='text-justify text-lg'>{postBody}</p>
      </div>
    </>
  )
}
