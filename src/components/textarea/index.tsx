import React from 'react'

type Props = {
    valueProps: string
    labelProps: string
    minLengthProps: number | undefined
    maxLengthProps: number | undefined
    placeholderProps: string
    error?: string | undefined
    onChangeProps?: (value: string) => void
}

export const TextArea: React.FC<Props> =
    ({
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

                    <label className="block mb-2 text-sm font-medium text-gray-900">{labelProps}</label>
                    <textarea
                        rows={5}
                        value={valueProps}
                        minLength={minLengthProps}
                        maxLength={maxLengthProps}
                        onChange={(e) => { if (onChangeProps) onChangeProps(e.target.value) }}
                        placeholder={placeholderProps}
                        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border ${error ? "border-red-600" : "border-gray-300"}  focus:ring-blue-500 focus:outline-none `}
                    />
                    <div className="flex flex-row justify-between">
                        <div className="">
                            {error && <p className="text-red-500 text-xs md:text-sm mt-1">{error}</p>}
                        </div>
                        <div className="flex justify-end">
                            <span className={`text-sm ${valueProps.length === maxLengthProps ? "text-red-600" : ""}`}>{valueProps.length}/{maxLengthProps}</span>
                        </div>
                    </div>
                </div >
            </>
        )
    }
