import React from 'react'
import { useNavigate } from 'react-router-dom'; 
import logo1 from '../assets/logos/logo1.png'
import logo2 from '../assets/logos/logo2.png'
import logo3 from '../assets/logos/logo3.png'
import logo4 from '../assets/logos/logo4.png'
import logo5 from '../assets/logos/logo5.png'

const FooterSection = () => {
    const navigate = useNavigate();

    const textItems = ['About CNNCT','Careers','Terms and Conditions','Blog','Getting Started','Privacy Policy','Press','Features and How-Tos','Cookie Notice','Social Good','FAQs','Trust Center','Contact','Report a Violation'];

  return (
    <div className='footer-section'>
        <div className='top-content'>
            <div className='buttons'>
            <button className='login' onClick={() => navigate('/signup', { state: { isLogin: true } })}>
                Log in
            </button>

            <button className='signup' onClick={() => navigate('/signup')}>Sign up free</button>
            </div>
            <div className='text-grid'>
                {textItems.map((item, index) => (
                    <span key={index} className='grid-item'>{item}</span>
                ))}
            </div>
        </div>
        <div className='bottom-content'>
            <p className='footer-text'>We acknowledge the Traditional Custodians of the land on which our office stands, The Wurundjeri people of the Kulin Nation, and pay our respects to Elders past, present and emerging.</p>
            <div className='logos'>
                <img src={logo1} alt="logo1"/>
                <img src={logo2} alt="logo2"/>
                <img src={logo3} alt="logo3"/>
                <img src={logo4} alt="logo4"/>
                <img src={logo5} alt="logo5"/>
            </div>
        </div>
    </div>
  )
}

export default FooterSection