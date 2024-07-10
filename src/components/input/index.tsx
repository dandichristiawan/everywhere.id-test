"use client"

import React from 'react'

type Props = {
    typeProps?: string
    valueProps?: string
    labelProps?: string
    minLengthProps?: number | undefined
    maxLengthProps?: number | undefined
    placeholderProps?: string
    error?: string | undefined
    onChangeProps?: (value: string) => void
}

export const Input: React.FC<Props> =
    ({
        typeProps,
        valueProps,
        labelProps,
        minLengthProps,
        maxLengthProps,
        placeholderProps,
        onChangeProps,
        error
    }) => {

        return (
            <>
                <div className="mb-2">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{labelProps}</label>
                    <input
                        type={typeProps}
                        value={valueProps}
                        maxLength={maxLengthProps}
                        minLength={minLengthProps}
                        placeholder={placeholderProps}
                        onChange={(e) => { if (onChangeProps) onChangeProps(e.target.value) }}
                        className={`bg-gray-50 border ${error ? 'border-red-600' : 'border-gray-300'}  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-none block w-full p-2.5`}
                    />
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
            </>
        )
    }
