import React from "react";

const Features = () => {
    return (
        <div id="features">
            <div className="row features-row">
                <div className="features-box col-lg-4">
                    <span className="fa-solid fa-spa fa-4x"></span>
                    <h3 className="features-heading">Stylish.</h3>
                </div>
                <div className="features-box col-lg-4">
                    <span className="fa-solid fa-sun fa-4x"></span>
                    <h3 className="features-heading">Stunning.</h3>
                </div>
                <div className="features-box col-lg-4">
                    <span className="fa-solid fa-tree fa-4x"></span>
                    <h3 className="features-heading">Sustainable.</h3>
                </div>
            </div>
        </div>
    );
}

export default Features;