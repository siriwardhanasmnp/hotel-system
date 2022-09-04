import React from "react";

import HeaderStyles from './Header.module.css';

import {Row, Col, Space} from 'antd';

function Header()
{
    return(
        <>
        <div className={HeaderStyles.headerBox}>
            <table>
                <tr>
                
                <td><button className={HeaderStyles.headerBtn}>Logo</button></td>
                <td style={{padding:'5vw 0vw 0vw 48vw'}}></td>
                <td><button className={HeaderStyles.headerBtn}>Home</button></td>
                <td><button className={HeaderStyles.headerBtn}>ContactUs</button></td>
                <td><button className={HeaderStyles.headerBtn}>My Profile</button></td>
                <td><button className={HeaderStyles.headerBtn}>Sign Up</button></td>
                <td><button className={HeaderStyles.headerBtn}>Login</button></td>
        
              
                </tr>
            </table>
        </div>
        </>
    );
}

export default Header;