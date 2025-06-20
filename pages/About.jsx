import React from "react";
import { Link } from "react-router-dom";


export default   function About() {
      return (
        <div className='about-main'>
            <img src='./images/van-night.png' />
            <div className='about-main-info'>
                <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel 
                    van rental. Our vans are recertified before each trip to ensure your 
                    travel plans can go off without a hitch.
                    <br/>(Hitch costs extra 😉)
                    <br/>
                    <br/>Our team is full of vanlife enthusiasts who know firsthand the magic 
                    of touring the world on 4 wheels.
                </p>
                <div>
                    <h2>Your destination is waiting.<br/>Your van is ready.</h2> 
                    <button>Explore our vans</button>
                </div>

            </div>
        </div>
      )
  }
