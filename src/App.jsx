import Nav from "./components/Nav"
import Main from "./components/Main"
import SideBar from "./components/SideBar"
import Footer from "./MainComponents/Footer"
import Hero from "./MainComponents/Hero"
import { useEffect } from "react"

export default function App(){

    return(
        <div>
            <Nav />
            <Hero />
            <Main />
            <Footer />
        </div>
    )
}