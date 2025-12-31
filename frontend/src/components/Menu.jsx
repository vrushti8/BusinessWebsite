import { useState } from "react";

function Menu() {

  const items = [
    { name: "Paneer Butter Masala", price: 200, img: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Veg Biryani", price: 180, img:"https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Masala Dosa", price: 120, img:"https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Butter Naan", price: 40, img: "https://images.unsplash.com/photo-1640625314547-aee9a7696589?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Pav Bhaji", price: 150, img: "https://images.unsplash.com/photo-1619193099598-6856ec4e2a87?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { name: "Gulab Jamun", price: 40, img: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} 
  ];

  const [cart, setCart] = useState([]);

  // Add item or increase quantity
  const addToCart = (item) => {
    const exists = cart.find(x => x.name === item.name);

    if (exists) {
      setCart(
        cart.map(x =>
          x.name === item.name ? { ...x, qty: x.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  // Decrease quantity / remove if 0
  const removeFromCart = (item) => {
    const exists = cart.find(x => x.name === item.name);

    if (exists.qty === 1) {
      setCart(cart.filter(x => x.name !== item.name));
    } else {
      setCart(
        cart.map(x =>
          x.name === item.name ? { ...x, qty: x.qty - 1 } : x
        )
      );
    }
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);

  return (
    <section id="menu">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {items.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* CART SECTION */}
      <div className="cart-box">
        <h2>Cart</h2>

        {cart.length === 0 && <p>No items added yet</p>}

        {cart.map((item, i) => (
          <div key={i} className="cart-row">
            <span>{item.name}</span>

            <div className="qty-controls">
              <button onClick={() => removeFromCart(item)}>−</button>
              <span>{item.qty}</span>
              <button onClick={() => addToCart(item)}>+</button>
            </div>

            <span>₹{item.price * item.qty}</span>
          </div>
        ))}

        <hr />
        <h3>Total: ₹{total}</h3>
      </div>
    </section>
  );
}

export default Menu;


