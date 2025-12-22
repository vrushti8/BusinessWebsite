function Menu() {
  const items = [
    {
      name: "Paneer Butter Masala",
      price: "₹200",
      desc: "Creamy tomato gravy with soft paneer cubes",
      img: "https://images.unsplash.com/photo-1690401767645-595de0e0e5f8?q=80&w=1313&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Veg Biryani",
      price: "₹180",
      desc: "Aromatic basmati rice cooked with vegetables",
      img: "https://images.unsplash.com/photo-1630409346824-4f0e7b080087?q=80&w=1546&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Masala Dosa",
      price: "₹120",
      desc: "Crispy dosa filled with spiced potato",
      img: "https://images.unsplash.com/photo-1694849789325-914b71ab4075?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Butter Naan",
      price: "₹40",
      desc: "Soft naan brushed with butter",
      img: "https://images.unsplash.com/photo-1640625314547-aee9a7696589?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Pav Bhaji",
      price: "₹150",
      desc: "Spicy bhaji served with pav",
      img: "https://images.unsplash.com/photo-1619193099598-6856ec4e2a87?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Gulab Jamun",
      price: "₹40",
      desc: "Soft milk dumplings soaked in sugar syrup",
      img: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ];

  return (
    <section id="menu">
      <h2>Our Menu</h2>

      <div className="menu-grid">
        {items.map((item, index) => (
          <div className="menu-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <span>{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Menu;
