import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import GlobalStyle from '../globalStyles'
import Dropdown from '../Components/Dropdown'
import Footer from '../Components/Footer'
import Tools from '../Components/Tools'
import Landing from '../Components/Landing'


const Home = () => {

    const [isOpen,setIsOpen] = useState(false);

    const toggle = (e) => {
        setIsOpen(!isOpen)
    }
    return (
        <>
            <GlobalStyle/>
            <Navbar toggle={toggle}/>
            <Dropdown isOpen={isOpen} toggle={toggle}/>
            <Tools/>
            <Footer/>
        </>
    )
}

export default Home
