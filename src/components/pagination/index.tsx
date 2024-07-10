"use client"

import React from 'react'

type Props = {
    totalEntries: number | undefined,
    skip: number
    limit: number | undefined
    nextPage: (value: number) => void
}

export const Pagination: React.FC<Props> = ({ totalEntries, skip, limit, nextPage }) => {
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

    return (
        <>
            <div className="flex flex-row justify-between p-4 items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{start}</span> to <span className="font-semibold text-gray-900 dark:text-white">{end}</span> of <span className="font-semibold text-gray-900 dark:text-white">{totalEntries}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    {start === 1 && end === 6 ? (
                        <>
                            <button onClick={handleNextPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </button>
                        </>
                    ) : (
                        <>
                            <button onClick={handlePrevPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Prev
                            </button>
                            <button onClick={handleNextPage} className="flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </button>
                        </>
                    )}

                </div>
            </div>
        </>
    )
}
