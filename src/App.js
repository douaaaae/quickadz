import React from "react";
import "./App.css";
function App() {

  const products = [
    {
      id: 1,
      name: "Arno Wood Chair",
      price: "$910",
      location: "New in Rochester",
      imgSrc: "ch222.png", // Replace with your image path
      colors: ["#000", "#6cc24a", "#6cc24a"], // Example colors
    },
    {
      id: 2,
      name: "Ceremonie Natural",
      price: "$910",
      location: "New in Rochester",
      imgSrc: "ch11.png",
      colors: ["#000", "#f7c646"],
    },
  {
      id: 3,
      name: "Broome Upholster",
      price: "$910",
      location: "New in Rochester",
      imgSrc: "ch222.png",
      colors: ["#f7c646", "#000"],
    },
    {
      id: 4,
      name: "Ana Ivory Natural",
      price: "$830",
      location: "New in Rochester",
      imgSrc: "four1.jpg",
      colors: ["#6cc24a", "#000"],
    },
    {
      id: 5,
      name: "Pamplona Eboniz",
      price: "$830",
      location: "New in Rochester",
      imgSrc: "four1.jpg",
      colors: ["#000"],
    },
    {
      id: 6,
      name: "Curran Crema",
      price: "$830",
      location: "New in Rochester",
      imgSrc: "four1.jpg",
      colors: ["#000", "#6cc24a"],
    },
  ];


  return (
    <div className="App">
      <div className="background">
        <nav className="navbar">
          <div className="logo">
            <h1>AdzQuick</h1>
          </div>
          <ul className="nav-links">
            <li className="li"><a href="#home">Home</a></li>
            <li className="li"><a href="#about">About Us</a></li>
            <li className="li"><a href="#services">Revieus</a></li>
            <li className="li"><a href="#contact">All Categories</a></li>
            <li><input type="text" name="" id=""placeholder="Chercher que vous..." /></li>
            <li className="li"><a href="#contact">Sing-Up</a></li>
          </ul>
        </nav>
        <div className="content">
          <h1>Discovering The  <br />Best Annonce For Your Life</h1>
          <p>Ceci est un exemple d'une page avec une image en arrière-plan et une navbar.</p>
        </div>
      </div>
      <div className="all">

      <div className="card">
        <p className="pp">
          These products are <span className="icon">∞</span> made with <br />
          wood forest certified to be responsibly <br />
          managed, environmentally <span className="icon">▰▰</span> sound <br />
          and socially beneficial
        </p>
      </div>



    
     <div className="header2">
      <div className="header">
        <h1 className="h11">New Collections</h1>
        <p className="p3">
          These products are made with wood from forests certified to be
          responsiblyk managed
        </p>
      </div>
      <div className="header1">
      <button className="collection-btn">See Collection</button>
      </div>
       
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.location}</p>
            <div className="price">{product.price}</div>
          </div>
        ))}
      </div>


     </div>




     
    </div>
  );
}

export default App;