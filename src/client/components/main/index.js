import React from "react";
import logo from "./logo.png";
import one from "./one.png";
import two from "./two.png";
import three from "./three.png";
import { BsFacebook, BsGlobe2, BsFillTelephoneFill } from 'react-icons/bs';
import "./style.css";

const Main = () => {
    return (
        <div>
            <div class="flex-container">
                <div class="flex-item-left"></div>
                <img src={logo} className="flex-item-center logo" />
                <div class="flex-item-right"></div>
            </div>
            <div class="flex-container">
                <img src={one} className="flex-item-center-sec one" />
                <div className="flex-item-right-sec">
                    <h5 className="context"> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h5>
                    <li className="context-main">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                    <li className="context-main">C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</li>
                    <img src={two} class="two" />
                    <p className="para">Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                </div>
            </div>
            <div class="flex-container">
                <h6 class="flex-item-center products">INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION.
                </h6>
            </div>
            <div className="flex-container">
                <img src={three} class="flex-item-center three" />
                <p className="flex-item-center ">Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors  </p>

            </div>
            <div className="flex-container">
                <hr className="flex-item-center line"></hr>
            </div>
            <div className="flex-container">
                <h6 className="flex-item-center products">C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h6>
                <p className="product-list">CHEMICALS <span className="vertical-lines">|</span> PROCESS POWER WATER <span className="vertical-lines">|</span> WASTE WATER OILS <span className="vertical-lines">|</span> GAS PHARMA SUGARS <span className="vertical-lines">|</span> DISTILLERIES PAPER <span className="vertical-lines">|</span> PULP MARINE <span className="vertical-lines">|</span> DEFENCE METAL <span className="vertical-lines">|</span> MINING FOOD <span className="vertical-lines">|</span> BEVERAGE PETROCHEMICAL <span className="vertical-lines">|</span> REFINERIES SOLAR BUILDING HVAC FIRE FIGHTING AGRICULTURE <span className="vertical-lines">|</span> RESIDENTIAL</p>
            </div>
            <div className="flex-container footer">
                <div className="flex-item-left phone"><br></br><BsFillTelephoneFill color="white" /><a href="#">Toll free 1800 200 1234</a></div>
                <div className="flex-item-center facebook"><br></br><BsFacebook color="white" /><a href="#">www.facebook.com/cripumps</a></div>
                <div className="flex-item-right website"><br></br><BsGlobe2 color="white" /><a href="#">www.crigroup.com</a></div>
            </div>
        </div>
    )
}
export default Main;