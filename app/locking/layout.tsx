import React from "react";
import Navbar from "@/components/Navbar";
export default function LockingLayout({ children }: { children: React.ReactNode }){
    return (
        <React.Fragment>
            <Navbar />
            {children}
        </React.Fragment>
    )
}