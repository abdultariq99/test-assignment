import  { useState } from 'react';
import { Navlinks } from './Navlinks';
import { NavDropdownLink } from './NavDropdownLink';

import dropdownIcon from '/src/assets/dropdownicon.svg';
import navImg1 from '/src/assets/navimg1.svg';
import webLogo from '/src/assets/weblogo.svg';
import navProfileImg from '/src/assets/navprofileimg.svg';
import googleImg from '/src/assets/google.svg';
import starIcon from '/src/assets/staricon.svg';
import navLinkIcon1 from '/src/assets/navlinkicon1.svg';
import navLinkIcon2 from '/src/assets/navlinkicon2.svg';
import navLinkIcon3 from '/src/assets/navlinkicon3.svg';
import navLinkIcon4 from '/src/assets/navlinkicon4.svg';
import navLinkIcon5 from '/src/assets/navlinkicon5.svg';
import navLinkIcon6 from '/src/assets/navlinkicon6.svg';

export function Navbar() {
    const [open, setOpen] = useState(false);
  
    return (
        <>
            <nav className={`${open ? 'nav-open' : ''}`}>
                <div className='nav-close ' onClick={() => setOpen(!open)}>
                    <img src={dropdownIcon} alt="Dropdown icon" />
                </div>
                <div className="nav-header">
                    <div className="header-upper">
                        <img src={navImg1} alt="Night mode icon" />
                        <p>NACHTMODUS</p>
                    </div>
                    <img className='web-logo' src={webLogo} alt="Web logo" />
                </div>
                <div className="nav-center">
                    <Navlinks img={navLinkIcon1} heading={"Immobilienlexikon"} subheading={"Immobilienwissen für alle Fälle."} btn={"KI"} />
                    <Navlinks img={navLinkIcon2} heading={"Preisschätzung"} subheading={"Den Wert Ihres Hauses schätzen lassen."} btn={"LINK"} />
                    <NavDropdownLink img={navLinkIcon3} heading={"Checklisten"} subheading={"Praktische Checklisten für jeden Schritt."} btn={"PDF"} />
                    <NavDropdownLink img={navLinkIcon4} heading={"Ratgeber"} subheading={"Immobilien-Expertenrat für Eigentümer."} btn={"PDF"} />
                    <Navlinks img={navLinkIcon5} heading={"Mandatsnavigator"} subheading={"Verständlich zum Verkaufsabschluss."} btn={"KI"} />
                    <Navlinks img={navLinkIcon6} heading={"Wohntraumfinder"} subheading={"Zum Traumheim mit KI-Unterstützung."} btn={"KI"} />
                </div>
                <div className="nav-profile-card">
                    <p className='profile-name'>Immotrust AG</p>
                    <p className='profile-description'>Vertrauensvolle Immobilienberatung seit 2008.</p>
                    <button className='profile-button'>Carlos Kuk - Eigentümer</button>
                    <div className="profile-box">
                        <img className='profile-img' src={navProfileImg} alt="Profile" />
                    </div>
                </div>
                <div className="nav-bottom">
                    <div className="nav-rating-wrapper">
                        <img className='google-img' src={googleImg} alt="Google logo" />
                        <p className='google-text'>Bewertungen</p>
                        <div className="rating-wrapper">
                            <div className="icon-box">
                                <img src={starIcon} alt="Star icon" />
                            </div>
                            <div className="icon-box">
                                <img src={starIcon} alt="Star icon" />
                            </div>
                            <div className="icon-box">
                                <img src={starIcon} alt="Star icon" />
                            </div>
                            <div className="icon-box">
                                <img src={starIcon} alt="Star icon" />
                            </div>
                            <div className="icon-box2">
                                <img src={starIcon} alt="Star icon" />
                            </div>
                        </div>
                    </div>
                    <p className='nav-bottom-text'>4,6 VON 5 BASIEREND AUF 245 BEWERTUNGEN</p>
                </div>
            </nav>
        </>
    );
}
