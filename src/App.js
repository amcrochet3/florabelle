//styling
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import NavBar from './NavBar';
import Carousel from './Carousel';
import Features from './Features';
import About from './About';
import ProductCards from './ProductCards';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const removeFromCart = (index) => {
    const newCart = [...cartItems];

    newCart.splice(index, 1);
    setCartItems(newCart);
  };

  const updateQuantity = (index, value) => {
    const newCart = [...cartItems];

    newCart[index].quantity += value;

    if (newCart[index].quantity <= 0) {
      newCart.splice(index, 1);
    }

    setCartItems(newCart);
  };

  const toggleCartItem = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.title === product.title);

    if (existingProductIndex !== -1) {
      const newCart = [...cartItems];

      newCart.splice(existingProductIndex, 1);
      setCartItems(newCart);
    } else {
      const newProduct = { ...product, quantity: 1 };

      setCartItems(prevItems => [...prevItems, newProduct]);
    }
  };

  const handleShowCart = () => {
    setShowCart(true);
  };

  const closeCart = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      <NavBar openCart={handleShowCart} />
      <Carousel />
      <Features />
      <About />
      <ProductCards cartItems={cartItems} toggleCartItem={toggleCartItem} handleShowCart={handleShowCart} />
      <Cart showCart={showCart} closeCart={closeCart} cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity} />
    </div>
  );
}

export default App;