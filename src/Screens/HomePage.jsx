import React from "react";

import HomePageStyles from './HomePage.module.css';
import NavBar from '../Common_Components/NavBar'

function HomePage()
{
    return(
        <>
        <div className={HomePageStyles.screen}>
            <NavBar/>
        </div>
        </>
    );
}

export default HomePage;