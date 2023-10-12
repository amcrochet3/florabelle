import React from "react";

const Carousel = () => {
    return (
        <div id="carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="2"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="3"></button>
                <button type="button" data-bs-target="#carousel" data-bs-slide-to="4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item main-item active">
                    <img src="/img/cherry-blossoms-1.jpg" className="d-block w-100" alt="..." data-bs-interval="10000"></img>
                    <div className="carousel-caption d-none d-md-block">
                        <img src="/img/Re~Awakening Heading.png"></img>
                        <p>Explore Our Spring Collection</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="/img/desert-pose.jpg" className="d-block w-100" alt="..." data-bs-interval="10000"></img>
                </div>
                <div className="carousel-item">
                    <img src="/img/field-pose.jpg" className="d-block w-100" alt="..." data-bs-interval="10000"></img>
                </div>
                <div className="carousel-item">
                    <img src="/img/beach-pose.jpg" className="d-block w-100" alt="..." data-bs-interval="10000"></img>
                </div>
                <div className="carousel-item">
                    <img src="/img/shore-pose.jpg" className="d-block w-100" alt="..." data-bs-interval="10000"></img>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}

export default Carousel;