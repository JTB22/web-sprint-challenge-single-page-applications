import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './Home.css';


const Home = () => {

    return (
        <div className="home">
            <p>Food Delivery</p>
            <Link to="/pizza">Order Now</Link>
        </div>
    )
    
};

export default Home;