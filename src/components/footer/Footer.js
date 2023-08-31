import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Abhay Vidja</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href='#services' className='footer__link'>Services</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='https://www.facebook.com/abhay.vidja?mibextid=ZbWKwL' className='footer__social-link' target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href='https://instagram.com/abhay._____.09?igshid=ZDdkNTZiNTM=' className='footer__social-link' target='_blank'>
                        <i class="bx bxl-instagram-alt"></i>
                    </a>

                    <a href='https://www.linkedin.com/in/abhay-vidja-05272327b' className='footer__social-link' target='_blank'>
                        <i class='bx bxl-linkedin'></i>
                    </a>
                </div>

                <span className='footer__copy'> &#169; Abhay Vidja. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
