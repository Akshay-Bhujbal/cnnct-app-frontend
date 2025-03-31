import React from "react";
import app1 from "../assets/images/app1.png";
import app2 from "../assets/images/app2.png";
import app3 from "../assets/images/app3.png";
import app4 from "../assets/images/app4.png";
import app5 from "../assets/images/app5.png";
import app6 from "../assets/images/app6.png";
import app7 from "../assets/images/app7.png";
import app8 from "../assets/images/app8.png";
import app9 from "../assets/images/app9.png";

const apps = [
    { img: app1, name: 'Audiomack', discription: 'Add an Audiomack player to your Linktree' },
    { img: app2, name: 'Bandsintown', discription: 'Drive ticket sales by listing your events' },
    { img: app3, name: 'Bonfire', discription: 'Display and sell your custom merch' },
    { img: app4, name: 'Books', discription: 'Promote books on your Linktree' },
    { img: app5, name: 'Buy Me A Gift', discription: 'Let visitors support you with a small gift' },
    { img: app6, name: 'Cameo', discription: 'Make impossible fan connections possible' },
    { img: app7, name: 'Clubhouse', discription: 'Let your community in on the conversation' },
    { img: app8, name: 'Community', discription: 'Build an SMS subscriber list' },
    { img: app9, name: 'Contact Details', discription: 'Easily share downloadable contact details' },

]


const AppSection = () => {
  return (
    <div className="app-section">
        <h2>All Link Apps and Integrations</h2>
        <div className="app-grid">
            {apps.map((app, index) => (
                <div key={index} className="app-card">
                    <div>
                        <img src={app.img} alt={app.name} className="app-logo" />
                    </div>
                    <div>
                        <p className="app-name">{app.name}</p>
                        <p className="app-description">{app.discription}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>

  )
}

export default AppSection
