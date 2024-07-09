import React from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";


type Props = {
    children: React.ReactNode
}

export default function LayoutHome({ children }: Props) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    )
}