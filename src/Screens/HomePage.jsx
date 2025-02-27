import React from "react";

import HomePageStyles from './HomePage.module.css';

import NavBar from '../Common_Components/NavBar'
import Header from '../Common_Components/Header'
import Footer from '../Common_Components/Footer'

function HomePage()
{
    return(
        <>
        <div className={HomePageStyles.screen}>
            <Header/>
            <NavBar/>
            <Footer/>
        </div>
        </>
    );
}

export default HomePage;