import React from 'react'

type Props = {
    tags?: string[] | undefined
}

export const Bagde: React.FC<Props> = ({ tags }) => {
    return (
        <>
            <div className={`flex justify-start px-2 md:px-0 md:justify-end w-full`}>
                {tags?.map((tag, index) => (
                    <div key={index} className="border rounded-full p-1 md:p-3 m-1 inline-block bg-slate-200">
                        <p className='text-[10px] md:text-[12px] font-semibold'>{tag}</p>
                    </div>
                ))}
            </div >
        </>
    )
}
