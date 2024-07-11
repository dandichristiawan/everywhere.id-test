"use client"

import React from 'react'
import { Input } from '@/components/input'
import { Modal } from '@/components/modal'
import { TextArea } from '@/components/textarea'
import { SpinnerMd } from '@/components/spinner/md'
import { validation, trimDoubleSpaces } from '@/lib/validation'


export const ContactForm = () => {

    const [isPending, setIsPending] = React.useState<boolean>(false)
    const [fullName, setFullName] = React.useState<string>('')
    const [email, setEmail] = React.useState<string>('')
    const [message, setMessage] = React.useState<string>('')
    const [showModal, setShowModal] = React.useState<boolean>(false);
    const [errors, setErrors] = React.useState<{ fullName?: string; email?: string; message?: string }>({})
    const [result, setResult] = React.useState<{ fullName: string; email: string; message: string }>({
        fullName: '',
        email: '',
        message: '',
    });


    const onSubmit = () => {
        const trimmedFullName = trimDoubleSpaces(fullName)
        const trimmedEmail = trimDoubleSpaces(email)
        const trimmedMessage = trimDoubleSpaces(message)
        const validationErrors = validation(trimmedFullName, trimmedEmail, trimmedMessage)
        setIsPending(true)
        if (Object.keys(validationErrors).length > 0) {
            setTimeout(() => {
                setErrors(validationErrors)
                setIsPending(false)
            }, 1500);
        } else {
            setTimeout(() => {
                setIsPending(false)
                setShowModal(true)
                setResult({ fullName: trimmedFullName, email: trimmedEmail, message: trimmedMessage });
            }, 1500);
        }
    }

    const onModalClose = () => {
        setShowModal(false)
        setErrors({})
        setResult({ fullName: '', email: '', message: '' });
        setFullName('')
        setEmail('')
        setMessage('')
    }

    return (
        <>
            <main className="min-h-screen max-w-3xl justify-start md:justify-center flex flex-col mx-auto">
                <div className='p-5 rounded-2xl shadow-none md:shadow-xl' >
                    <h1 className="text-left md:text-center text-3xl font-semibold my-10 md:0">Contact Me</h1>
                    <Input
                        typeProps='text'
                        minLengthProps={3}
                        maxLengthProps={32}
                        valueProps={fullName}
                        labelProps='Full Name'
                        placeholderProps='John Doe'
                        onChangeProps={setFullName}
                        error={errors.fullName}
                    />
                    <Input
                        typeProps='email'
                        minLengthProps={3}
                        maxLengthProps={32}
                        valueProps={email}
                        labelProps='E-Mail'
                        placeholderProps='john.doe@domain.com'
                        onChangeProps={setEmail}
                        error={errors.email}
                    />
                    <TextArea
                        labelProps='Message'
                        minLengthProps={3}
                        maxLengthProps={80}
                        valueProps={message}
                        placeholderProps='Write your message here....'
                        onChangeProps={setMessage}
                        error={errors.message}
                    />
                    <div className="flex justify-center">
                        <button className='bg-blue-600 p-2 rounded-full mt-8 md:mt-2 w-full md:w-1/4 text-white' onClick={onSubmit}>
                            {isPending ? (
                                <>
                                    <div className="flex flex-row justify-center">
                                        <div className="hidden md:flex justify-center items-center w-2/3">
                                            <p>Submitting</p>
                                        </div>
                                        <SpinnerMd />
                                    </div>
                                </>
                            ) : 'Submit'}
                        </button>
                    </div>
                </div>
            </main>
            <Modal
                result={result}
                isOpen={showModal}
                onClose={onModalClose}
            />
        </>
    )
}
