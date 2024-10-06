import React from "react";
import { useState } from "react";
import './Footer.css'
import footer_logo from '../Assets/logo_big.png' 
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'




const Footer = () => {
    const [hoverIcon, setHoverIcon] = useState(null)


    const handleMouseEnter = (iconName) => {
    setHoverIcon(iconName);
  };

    const handleUnHover = () => {
    setHoverIcon(null)
}
    return (
        <div className="footer">
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contact</li>
            </ul>

            <div className="footer-social-icon">
                <div 
                    className={`footer-icons-container ${hoverIcon === 'instagram' ? 'hover' : ''}`}
                    onMouseEnter={() => handleMouseEnter('instagram')}
                    onMouseLeave={handleUnHover}
                    >
                    <img src={instagram_icon} alt="" />
                </div>
                 <div className={`footer-icons-container ${hoverIcon === 'pintester' ? 'hover' : ''}`}
                    onMouseEnter={() => handleMouseEnter('pintester')}
                    onMouseLeave={handleUnHover}
                    >
                    <img src={pintester_icon} alt="" />
                </div>
                <div className={`footer-icons-container ${hoverIcon === 'whatsapp' ? 'hover' : ''}`}
                    onMouseEnter={() => handleMouseEnter('whatsapp')}
                    onMouseLeave={handleUnHover}
                    >
                    <img src={whatsapp_icon} alt="" />
                </div>
            </div>

            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default Footer