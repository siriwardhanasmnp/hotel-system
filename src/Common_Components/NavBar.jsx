import React from "react";

import NavBarStyles from './NavBar.module.css';

function NavBar()
{
    return(
        <>
            <div className={NavBarStyles.box}>
                <table>
                    <tr><button className={NavBarStyles.navBtn}>Foods</button></tr>
                    <tr><button className={NavBarStyles.navBtn}>Rooms</button></tr>
                    <tr><button className={NavBarStyles.navBtn}>Room Bookings</button></tr>
                    <tr><button className={NavBarStyles.navBtn}>Employees</button></tr>
                    <tr><button className={NavBarStyles.navBtn}>Payments</button></tr>
                    <tr><button className={NavBarStyles.navBtn}>Customers</button></tr>
                </table>
            </div>
        </>
    );
}

export default NavBar;