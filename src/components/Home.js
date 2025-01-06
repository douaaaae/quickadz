import React from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
export default function Home() {
 
  const lasts=[
    {
      id:0,
      name: "Porsche",
      imgSrc:"2.jpeg"
    }]
  const produits=[
    {
      id:1,
      name: "Porsche",
      imgSrc:'4.jpeg'
    },
    {
      id:2,
      name: "Porsche",
      imgSrc:'COMO.jpeg'
    }
  ];
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
        <div className="content">
          <h1>Discovering The  <br />Best Annonce For Your Life</h1>
          <p>Ceci est un exemple d'une page avec une image en arrière-plan et une navbar.</p>
        </div>
      </div>
      <div className="all">
      <div className="card1">
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
    <Link to='/Annonces'> <button className="collection-btn">See Collection</button></Link> 
      </div>
      </div>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.imgSrc} alt={product.name} className="product-image" />
            <div className="vid">
            <h2>{product.name}</h2>
            <div className="price">{product.price}</div>
            </div>
            <p>{product.location}</p>
          </div>
        ))}
      </div>
      <div className="container">
      <div className="row">
        {lasts.map((last)=>(
          <div key={last.id} className='col-md-6 lg-12 div1' >
            <img src={last.imgSrc} className='img10' alt="" />
          </div>
        ))}
        <div className="col-md-5 div32">
        {produits.map((produit)=>(
          <div key={produit.id} className=" col-md-12 div2">
             <img src={produit.imgSrc} alt=""  className='img11'/>
          </div>
        ))}
        </div>
      </div>
      </div>

    <div className="all3">
      <div className="all2">
      <div className='all4'>
        <h4 className='h4'>The Best 80's cars </h4>
        <button>Show more</button>
       </div>
       </div>
    </div>
       <Footer/>
      </div>
     </div>
    
  );

}
