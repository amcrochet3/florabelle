import React, { useEffect } from "react";

const Cart = ({ showCart, closeCart, cartItems, removeFromCart, updateQuantity }) => {

    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape" && showCart) {
                closeCart();
            }
        };

        document.addEventListener("keydown", handleEscape);

        return () => document.removeEventListener("keydown", handleEscape);
    }, [showCart, closeCart]);

    const total = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

    return (
        <>
            {showCart && <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1040
            }} onClick={closeCart}></div>}

            <div className={`modal ${showCart ? "show" : ""}`} tabindex="-1" style={showCart ? { display: 'block', zIndex: 1050 } : {}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h3>Your Cart</h3>
                            <button type="button" className="close" onClick={closeCart}>&times;</button>
                        </div>
                        <div className="modal-body">
                            {cartItems.length === 0 ? (
                                <p>Your cart is empty!</p>
                            ) : (
                                cartItems.map((item, index) => (
                                    <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                        <img src={item.imgSrc} alt={item.title} width="50" />
                                        <span>{item.title} - ${item.price.toFixed(2)}</span>

                                        <div className="input-group" style={{ width: '100px' }}>
                                            <div className="input-group-prepend">
                                                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(index, -1)}>-</button>
                                            </div>
                                            <input type="text" className="form-control text-center" value={item.quantity} readOnly />
                                            <div className="input-group-append">
                                                <button className="btn btn-outline-secondary" onClick={() => updateQuantity(index, 1)}>+</button>
                                            </div>
                                        </div>

                                        <button onClick={() => removeFromCart(index)} className="btn btn-danger btn-sm">Remove</button>
                                    </div>
                                ))
                            )}
                        </div>
                        {cartItems.length > 0 && (
                            <div className="modal-footer">
                                <p>Total: ${total.toFixed(2)}</p>
                                <button className="btn btn-success" onClick={() => alert(`Checkout total: $${total.toFixed(2)}`)}>Checkout</button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

Cart.defaultProps = {
    cartItems: []
};

export default Cart;