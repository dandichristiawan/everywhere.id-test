import React from 'react'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

type Props = {
    children: React.ReactNode
}

export default function LayoutPost({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>

    )
}
