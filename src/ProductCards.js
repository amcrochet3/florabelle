import React, { useState } from 'react';

const ProductCard = ({ title, price, imgSrc, hoverImgSrc, toggleCartItem }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [clicked, setClicked] = useState(false);
    const [inCart, setInCart] = useState(false);

    const handleToggleCart = () => {
        toggleCartItem({ title, price: parseFloat(price.replace("$", "")), imgSrc });
        setInCart(prevInCart => !prevInCart);
        setClicked(true);
    };

    return (
        <div className="col-md-4 mb-4">
            <div className="card">
                <img
                    src={isHovered ? hoverImgSrc : imgSrc}
                    className="card-img-top"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{price}</p>
                    <button
                        onClick={handleToggleCart}
                        className={`btn btn-primary ${inCart ? 'btn-added' : ''} ${clicked ? 'clicked' : ''}`}
                    >
                        {inCart ? "Added to Cart!" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    );
}

const ProductCards = ({ toggleCartItem, handleShowCart }) => {
    return (
        <div id="shop" className="container mt-5">
            <h3 className="products-header">See Our Collection</h3>
            <div className="row">
                <ProductCard
                    title="Sunset Whisper"
                    price="$25.00"
                    imgSrc="/img/sunset-whisper-1.jpg"
                    hoverImgSrc="/img/sunset-whisper-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
                <ProductCard
                    title="Pastel Solstice"
                    price="$30.00"
                    imgSrc="/img/pastel-solstice-1.jpg"
                    hoverImgSrc="/img/pastel-solstice-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
                <ProductCard
                    title="Mystic Earth"
                    price="$40.00"
                    imgSrc="/img/mystic-earth-1.jpg"
                    hoverImgSrc="/img/mystic-earth-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
                <ProductCard
                    title="EcoLuxe Radiance"
                    price="$35.00"
                    imgSrc="/img/ecoluxe-radiance-1.jpg"
                    hoverImgSrc="/img/ecoluxe-radiance-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
                <ProductCard
                    title="Harmony Sheath"
                    price="$20.00"
                    imgSrc="/img/harmony-sheath-1.jpg"
                    hoverImgSrc="/img/harmony-sheath-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
                <ProductCard
                    title="Petal Serenity"
                    price="$45.00"
                    imgSrc="/img/petal-serenity-1.jpg"
                    hoverImgSrc="/img/petal-serenity-2.jpg"
                    toggleCartItem={toggleCartItem}
                />
            </div>
            <button className="btn btn-primary mt-3 mb-5" onClick={handleShowCart}>View Cart</button>
        </div>
    );
}

export default ProductCards;