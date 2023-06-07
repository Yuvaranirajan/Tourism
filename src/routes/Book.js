import Main from "../component/main";
import React from "react";
import './BookStyle.css';
import Navbar from "../component/navbar";
import Footer from "../component/Footer";
import bookFormImg from '../assets/bookForm.jpg';
import bookImg from '../assets/book.jpg';
export default function Book(){
    return(
        
    <div className="Book">
        <Navbar/>
        <Main cName01="main-text" title="Book Now" text=" For Explore and discover the new experience just book your destiny." mainImage={bookImg} cName="main-content"/>
        <div className="booking">
            <div className="form-Image">
                <img src={bookFormImg}/>
            </div>
            <div className="form-content">
                <form>
                    <label>Where To</label>
                    <input type="text"/>
                    <label>Count</label>
                    <input type="number"/>
                    <label>Arrivals</label>
                    <input type="date"/>
                    <label>Leaving</label>
                    <input type="date"/>
                    <button>Book Now</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>

    );
}