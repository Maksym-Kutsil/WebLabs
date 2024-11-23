import React from "react"
import "./Footer.css"
import logo from "../../assets/icons/logo.svg"
import facebook from "../../assets/icons/facebook.svg"
import instagram from "../../assets/icons/instagram.svg"
import linkedin from "../../assets/icons/linkedin.svg"
import twitter from "../../assets/icons/twitter.svg"
import youtube from "../../assets/icons/youtube.svg"

const Footer = () => {
    return (
        <footer>
            <div className="footerTop">
                <img src={logo} alt="logo" />
                <p>©2020 Thousand Sunny. All rights reserved</p>
            </div>
            <div className="footerBottom">
                <ul>
                    <li>
                        <a href="https://x.com/?lang=uk">
                            <img className="footeLink" src={twitter} alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.facebook.com/?locale=uk_UA">
                            <img
                                className="footeLink"
                                src={facebook}
                                alt="facebook"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <img
                                className="footeLink"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://ua.linkedin.com/">
                            <img
                                className="footeLink"
                                src={linkedin}
                                alt="linkedin"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/">
                            <img className="footeLink" src={youtube} alt="youtube" />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer