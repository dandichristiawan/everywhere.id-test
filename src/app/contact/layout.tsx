import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function LayoutContact({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}
