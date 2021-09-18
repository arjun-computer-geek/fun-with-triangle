import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="social-icons">
                <Link to={{ pathname: "https://www.facebook.com/profile.php?id=100018911007097" }} target="_blank"><i className="fa fa-facebook-square" aria-hidden="true"></i></Link>
                <Link to={{ pathname: "https://api.whatsapp.com/send?phone=919608544916" }} target="_blank"><i className="fa fa-whatsapp" aria-hidden="true"></i></Link>
                <Link to={{ pathname: "https://www.instagram.com/arjun_computer_geek/" }} target="_blank" className="insta"><i className="fa fa-instagram" aria-hidden="true"></i></Link>
                <Link to={{ pathname: "https://twitter.com/arjun_comp_geek?s=09" }} target="_blank"><i className="fa fa-twitter" aria-hidden="true"></i></Link>
                <Link to={{ pathname: "https://github.com/arjun-computer-geek/" }} target="_blank"><i className="fa fa-github" aria-hidden="true"></i></Link>
                <Link to={{ pathname: "https://www.linkedin.com/in/arjun-kumar-a752731a2" }} target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></Link>
            </div>
            <p>Copyright &copy; 2021 Arjun. All rights reserved</p>
        </div>
    )
}

export default Footer