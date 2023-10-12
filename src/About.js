import React from "react";

const About = () => {
    return (
        <div id="about">
            <div className="row about-row d-flex align-items-center"> {/* Flex classes added here */}
                <div className="about-pfp col-lg-6">
                    <img className="about-img" src="/img/pexels-karolina-grabowska-4467687.jpeg" alt="woman-at-computer"></img>
                </div>
                <div className="about-txt col-lg-4 text-center">
                    <h1 className="about-header">About Us</h1>
                    <p className="about-text">Inspired by the radiant vistas of sunny Southern California, Elsa Apell launched her fashion brand <i>Florabelle</i> in 2023 as an homage to eco-conscious luxury in the world of fashion. A visionary entrepreneur, Apell is deeply committed to pioneering sustainability within the sartorial landscape. Adorned in its signature palette of ethereal pastels and rich earth tones, Florabelle has unfurled its petals globally, gracing the markets of eight different countries.</p>
                </div>
            </div>
        </div>
    );
}

export default About;