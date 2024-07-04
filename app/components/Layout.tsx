import React from "react";
import Header from "@/app/components/Header";

type Props = {
    children: React.ReactNode;
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <div>
            <main>{children}</main>
        </div>
    )
}

export default Layout
