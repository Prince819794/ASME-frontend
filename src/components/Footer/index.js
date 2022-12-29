import React from "react";
import motivation from "../../assets/motivation.png";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaLocationArrow } from 'react-icons/fa';
import { AiOutlineInstagram, AiTwotoneMail } from 'react-icons/ai';
import { TiGroup } from 'react-icons/ti';
import { BsTriangleFill } from 'react-icons/bs'
const Footer = () => {
    return (
        <div className="footer-section">


            <div className="container1-img">
                <img src={motivation} alt="container1-img img" />
            </div>
            <div className="foot-main-content">
                <div className="foot-title">
                    <span>GET IN <strong>TOUCH</strong></span>
                </div>


                <div className="s-media">
                    <div className="fb-icon i1"><a href=""><FaFacebookF className="fafa" size={20} /></a></div>
                    <div className="fb-icon"><a href=""><AiOutlineInstagram className="fafa" size={23} /></a></div>
                    <div className="fb-icon"><a href=""><FaLinkedinIn className="fafa" size={20} /></a></div>
                </div>

                <div className="foot-address">
                    <div className="foot-add-indi"> <span><FaLocationArrow size={20} /><span className="foot-addr">NIT Silchar, Silchar, Assam, India 788010</span></span></div>
                    <div className="foot-add-indi"> <span><AiTwotoneMail size={20} /><span className="foot-addr">asme.nitsilchar@gmail.com</span></span></div>
                    <div className="foot-add-indi"> <span><TiGroup size={20} /><span className="foot-addr">Community</span></span></div>
                </div>

                <button className="btn-contact">
                    <strong>Email Us</strong>
                </button>


                <div className="scroll-to-top">
                    <BsTriangleFill className="scroll-btn" size={18} />
                </div>

            </div>
        </div>
    );
};

export default Footer;