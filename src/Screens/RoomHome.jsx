import React from "react";

import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar'

function RoomHome()
{
    return(
        <>
            <div>
                <NavBar/>
                <div style={{height:'auto', width:'65vw', marginLeft:'30vw'}}>
                    <div>
                        <button style={{float:'right'}}>Generate Report</button>
                        <div style={{height:'8vw'}}></div>
                        <button>Add New Rooms</button>
                        <button style={{float:'right'}}>Search </button>
                    </div>
                    <div style={{height:'4vw'}}></div>
                    <div>
                        <center>
                        <table>
                            <tr>
                                <th className={RoomHomeStyles.tableHeader}>Room Code</th>
                                <th className={RoomHomeStyles.tableHeader}>Room Type</th>
                                <th className={RoomHomeStyles.tableHeader}>Sleeps</th>
                                <th className={RoomHomeStyles.tableHeader}>Price</th>
                                <th className={RoomHomeStyles.tableHeader}>Image</th>
                            </tr>
                        </table>
                        </center>
                    </div>
                </div>
            </div>
        </>
    );
}

export default RoomHome;