import React from "react";
import Header from "@/components/Header";
export default function HomeLayout({ children }: { children: React.ReactNode }){
    return (
        <React.Fragment>
            <Header />
            {children}
        </React.Fragment>
    )
}