import React from "react";
import Header from "./header";
import Slider from "./slider";
import ProductList from "./product-list";
import Footer from "./footer";
export default function Baitap3(){
    return(
        <div className="bg-dark">
            <Header/>
            <Slider/>
            <section id="smartphone" className="container-fluid pt-5 pb-5">
            <h1 className="text-white text-center">BEST SMARTPHONE</h1>
            <ProductList/>
            </section>
            <Footer/>
        </div>
    );
}