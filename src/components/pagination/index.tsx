"use client"

import { PostResponse } from '@/lib/definitions'
import React from 'react'

type Props = {
    posts: PostResponse | undefined
    totalEntries: number | undefined,
    skip: number
    limit: number | undefined
    nextPage: (value: number) => void
}

export const Pagination: React.FC<Props> = ({ posts, totalEntries, skip, limit, nextPage }) => {
    let start = skip + 1;
    let end = Math.min(skip! + limit!, totalEntries!)

    const handleNextPage = () => {
        const nextSkip = skip! + limit!;
        if (nextSkip < totalEntries!) nextPage(nextSkip)
    }

    const handlePrevPage = () => {
        const prevSkip = skip! - limit!;
        if (prevSkip >= 0) {
            nextPage(prevSkip)
        } else {
            nextPage(0)
        }
    }


    if (posts) {
        return (
            <>
                <div className="flex flex-row justify-between p-4 items-center">
                    <span className="text-sm text-gray-700 ">
                        Showing <span className="font-semibold text-gray-900 ">{start}</span> to <span className="font-semibold text-gray-900 ">{end}</span> of <span className="font-semibold text-gray-900 ">{totalEntries}</span> Posts
                    </span>
                    <div className="inline-flex mt-2 xs:mt-0">
                        {start === 1 && end === limit ? (
                            <>
                                <button onClick={handleNextPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900    d">
                                    Next
                                </button>
                            </>
                        ) : (
                            <>
                                <button onClick={handlePrevPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900">
                                    Prev
                                </button>
                                {end < totalEntries! && (
                                    <button onClick={handleNextPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900">
                                        Next
                                    </button>
                                )}
                            </>
                        )}

                    </div>
                </div>
            </>
        )
    }
}
