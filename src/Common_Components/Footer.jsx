import React from "react";

import FooterStyles from './Footer.module.css';

function Footer()
{
    return(
        <>
            <div className={FooterStyles.footerBox}>
                <center>
                <table>
                    <row>
                        <td className={FooterStyles.footerContent}>LOGO</td>
                        <td className={FooterStyles.footerContent}>
                            <h3>COMPANY</h3>
                        </td>
                        <td className={FooterStyles.footerContent}>
                            <h3>CONTACT INFO</h3>
                        </td>
                    </row>
                </table>
                </center>

            </div>
        </>
    );
}

export default Footer;