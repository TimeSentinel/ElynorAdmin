/* -------------------------------------------
(c)2025 Lance Stubblefield
elynoradmin: src/layout/index.tsx
-------------------------------------------- */

import {ReactNode} from "react";
import "./layout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

interface Props {
    children: ReactNode;
}

const Layout = ({children}: Props) => {

    return (
        <main>
            <div className="layoutContainer">
                <div className="layoutNavbar"><Navbar/></div>
                <div className="layoutBody">
                    <div className="layoutContent">
                        <section>
                            {children}
                        </section>
                    </div>
                    <div className="layoutFooter"><Footer/></div>
                </div>
            </div>
        </main>
    )
}
export {Layout}