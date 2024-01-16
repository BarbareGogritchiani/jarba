import React from 'react'
import "./FooterStyles.css";
function Footer(){
    
    return (
        <>
        <div className='footer'>
            <div className='top'>
                <div>
                    <h1>Jarba</h1>
                    <p>Travel in Georgia</p>

                </div>
                <div>
                    <a href="/">
                        <i className='fa-brands fa-facebook-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-instagram-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-behance-square'></i>
                    </a>
                    <a href="/">
                        <i className='fa-brands fa-twitter-square'></i>
                    </a>
                </div>
            </div>
            <div className='bottom'>
                <div>
                    <h4>Project</h4>
                    <a href="/">changelog</a>
                    <a href="/">Status</a>
                    <a href="/">License</a>
                    <a href="/">All Versions</a>

                </div>
                <div>
                    <h4>Community</h4>
                    <a href="/">GitHub</a>
                    <a href="/">Issues</a>
                    <a href="/">Project</a>
                    <a href="/">Twitter</a>
                    
                </div>
                <div>
                    <h4>Help</h4>
                    <a href="/">Support</a>
                    <a href="/">TroubleShooting</a>
                    <a href="/">Contact Us</a>
                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Footer;