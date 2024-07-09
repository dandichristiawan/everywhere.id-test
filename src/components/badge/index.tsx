import React from 'react'

type Props = {
    tags?: string[] | undefined
    position: string
}

export const Bagde: React.FC<Props> = ({ tags, position }) => {
    return (
        <>
            <div className={`flex justify-${position} w-full`}>
                {tags?.map((tag, index) => (
                    <div key={index} className="border rounded-full p-2 m-1 inline-block bg-slate-200">
                        <p className='text-[12px] font-semibold'>{tag}</p>
                    </div>
                ))}
            </div >
        </>
    )
}
