import React from 'react'

type Props = {
    isOpen: boolean
    onClose: () => void
    result: {
        fullName: string
        email: string
        message: string
    }
}

export const Modal: React.FC<Props> = ({ isOpen, onClose, result }) => {

    if (!isOpen) return null

    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="modal-overlay absolute inset-0 bg-black opacity-50"></div>
                <div className="modal-container bg-white w-11/12 md:max-w-md mx-auto rounded-xl shadow-lg z-50 max-h-screen overflow-hidden">
                    {/* Modal content */}
                    <div className="modal-content py-4 text-left px-6 max-h-full overflow-y-auto overflow-x-hidden">
                        {/* Modal header */}
                        <div className="flex justify-between items-center pb-3">
                            <p className="text-xl font-semibold">Form successfully submitted!</p>
                        </div>

                        {/* Modal body */}
                        <div className="">
                            <div className="flex flex-row gap-2 p-2">
                                <p className='text-sm'>Full Name: </p>
                                <p className="text-sm text-gray-500 break-all">{result.fullName}</p>
                            </div>
                            <div className="flex flex-row gap-2 p-2">
                                <p className='text-sm'>E-Mail: </p>
                                <p className="text-sm text-gray-500 break-all">{result.email}</p>
                            </div>
                            <div className="flex flex-row gap-2 p-2 ">
                                <p className='text-sm'>Message:</p>
                                <p className="text-sm text-gray-500 break-all">{result.message}</p>
                            </div>
                        </div>

                        {/* Modal footer */}
                        <div className="flex justify-end pt-2">
                            <button
                                onClick={onClose}
                                className="modal-close px-4 bg-transparent p-3 rounded-lg text-indigo-500 hover:bg-gray-100 hover:text-indigo-400 mr-2">
                                OK
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
