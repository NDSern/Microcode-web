import Nav from "./hero-components/Nav"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./components/Footer"
import Hero from "./hero-components/Hero"
import { useEffect } from "react"

export default function App(){

    return(
        <div>
            <Hero />
            <Main />
            <Footer />
        </div>
    )
}