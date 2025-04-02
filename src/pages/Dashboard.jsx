import React, {useState}  from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../assets/images/logo.png'
import '../styles/dashboard.css'

const Dashboard = () => {
    const [activePage, setActivePage] = useState("Events");
    const navigate = useNavigate();

    const handleNavigation = (page) => {
        setActivePage(page);
    };

  return (
        <div className="dashboard-container">
            <div className="sidebar">
                <div className="logo-container">
                    <img src={logo} alt="CNNCT Logo" className="logo-image" />
                    <h2 className="logo-text">CNNCT</h2>
                </div>

                <ul className="nav-options">
                    {["Events", "Bookings", "Availability", "Settings"].map((option) => (
                        <li 
                            key={option} 
                            className={activePage === option ? "active" : ""} 
                            onClick={() => handleNavigation(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>

                <button className="create-button">+ Create</button>
            </div>

            <div className="content-section">
                <h1>{activePage}</h1>
                <p>Content for {activePage} goes here.</p>
            </div>
        </div>
    );
};


export default Dashboard