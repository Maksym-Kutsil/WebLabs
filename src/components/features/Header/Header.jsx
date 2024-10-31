import React , { useRef , useEffect } from "react";
import "./Header.css";
import logo from "./images/logo.svg"

const Header = () => {
    const headerRef = useRef(null)
    const burgerRef = useRef(null)
    const navListRef = useRef(null)
    const navContainerRef = useRef(null)
    const headerNavRef = useRef(null)
    const line1Ref = useRef(null)
    const line2Ref = useRef(null)
    const line3Ref = useRef(null)
    let clicked = false

    function burgerToCross () {
        const line1 = line1Ref.current
        const line2 = line2Ref.current
        const line3 = line3Ref.current

        line1.style.transform = "translateX(-5.5px) rotate(-45deg)"
        line1.style.width = "37.5px"
        line2.style.width = 0
        line3.style.transform = "translateX(-5.5px) rotate(45deg)"
        line3.style.width = "37.5px"
    }

    function crossToBurger () {
        const line1 = line1Ref.current
        const line2 = line2Ref.current
        const line3 = line3Ref.current

        line1.style.transform = "rotate(0) translateX(0)"
        line1.style.width = "30px"
        line2.style.width = "30px"
        line2.style.transition = "0.5s"
        line3.style.transform = "rotate(0) translateX(0)"
        line3.style.width = "30px"
    }

    function checkScreenWidt () {
        const width = window.innerWidth
        const headerNav = headerNavRef.current
        const navList = navListRef.current
        const header = headerRef.current

        if (width > 840) {
            headerNav.appendChild(navList)
            navList.style.display = "flex"
            navList.style.flexDirection = "row"
            navList.style.alignItems = "center"
            clicked = false
            header.setAttribute("class", "header")
            crossToBurger()
        } else if (width <= 840 && clicked != true) {
            navList.style.display = "none"
        }
    }

    useEffect(() => {
        window.addEventListener("resize", checkScreenWidt)
    })

    function Burger () {
        const navContainer = navContainerRef.current
        const navList = navListRef.current
        const header = headerRef.current

        if (navContainer.children.length == 0) {
            navList.style.display = "flex"
            navList.style.flexDirection = "column"
            navList.style.alignItems = "end"
            navContainer.style.display = "flex"
            header.setAttribute("class", "headerOpen")
            document.body.style.overflow = "hidden"
            burgerToCross()
            navContainer.appendChild(navList)
            clicked = true
    
        } else {
            navContainer.style.display = "none"
            while (navContainer.firstChild) {
                navContainer.removeChild(navContainer.firstChild)
            }
            crossToBurger()
            document.body.style.overflow = "auto"
            header.setAttribute("class", "header")
            clicked = false
        }
    }

    return (
        <header id="header" ref={headerRef}>
            <div id="headerNav" ref={headerNavRef}>
                <div className="headerLeft">
                    <img src={logo} alt="logo" />
                </div>
                <div id="boorger" ref={burgerRef} onClick={Burger}>
                    <div id="line1" ref={line1Ref}/>
                    <div id="line2" ref={line2Ref}/>
                    <div id="line3" ref={line3Ref}/>
                </div>
                <nav id="navList" ref={navListRef}>
                    <ul className="linkList">
                        <li>
                            <a href="#" className="linsTop">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="linsTop">
                                Destinations
                            </a>
                        </li>
                        <li>
                            <a href="#" className="linsTop">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="linsTop">
                                Partner
                            </a>
                        </li>
                    </ul>
                    <div className="navButtonsContainer">
                        <a href="#" className="loginBtn">
                            Login
                        </a>
                        <a href="#" className="registerBtn">
                            Register
                        </a>
                    </div>
                </nav>
            </div>
            <div id="navContainer" ref={navContainerRef}></div>
        </header>   
    )
}

export default Header