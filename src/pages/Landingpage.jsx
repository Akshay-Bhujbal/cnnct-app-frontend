import React from 'react'
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/images/hero.png'
import logo from '../assets/images/logo.png'
import feat1 from '../assets/images/feature-img1.png'
import feat2 from '../assets/images/feature-img2.png'
import {LoremIpsum} from 'lorem-ipsum'
import Card from '../components/Card'
import AppSection from '../components/AppSection'
import FooterSection from '../components/FooterSection'



const lorem = new LoremIpsum();

const LandingPage = () => {
    const navigate = useNavigate();

  return (
    <div className='landing-page'>
        <nav className='navbar'>
            <div className='logo-container'>
                <img src={logo} alt="Logo" className='logo'/>
                <h2>CNNCT</h2>
            </div>
            <button className='signup' onClick={() => navigate('/signup')}>
                Sign up free
            </button>
        </nav>

        <div className='content'>
            <div className='hero-section'>
                <h1 className='slogan'>CNNCT - Easy</h1>
                <h1 className='slogan2'>Scheduling Ahead</h1>
                <button className='signup signup2' onClick={() => navigate('/signup')}>
                    Sign up free
                </button>
                <img className='hero-img' src={heroImage} alt="hero-img" />
                <h1>Simplified scheduling for you and your team</h1>
                <p>CNNCT eliminates the back-and-forth of scheduling meetings so you can focus on what matters. Set your availability, share your link, and let others book time with you instantly.</p>
            </div>

            <div className='feature-section'>
                <div className='feature-text'>
                    <h2>Stay Organized with Your Calendar and Meetings</h2>
                    <p>Seamless Event Scheduling</p>
                    <ul className='feature-list'>
                        <li>View all your upcoming meetings and appointment in one place.</li>
                        <li>Syncs with Google Calendar, Outlook, and iCloud to avoid conflicts</li>
                        <li>Customize event types: one-on-ones, team meetings, group sessions, and webinars</li>
                    </ul>
                </div>
                <div className='feature-img'>
                    <img className='feat-img1' src={feat1} alt="meeting-img" />
                    <img className='feat-img2' src={feat2} alt="meeting-img" />
                </div>
            </div>

            <div className='customer-section'>
                <div className='cust-story'>
                    <h1>Here's what our <span>Customer</span></h1>
                    <h1>has to says</h1>
                    <button className='read-story'>Read customer stories</button>
                </div>
                <div className='short-desc'>
                    <p>{lorem.generateSentences(3)}</p>
                </div>
            </div>

            <div className='cards-section'>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>

            <AppSection />
            <FooterSection/>

        </div>
        
    </div>
    
  )
}

export default LandingPage;