import React from "react";
import {Link} from 'react-router-dom'

import RoomHomeStyles from './RoomHome.module.css';
import NavBar from '../Common_Components/NavBar'

function AddRoom()
{
    return(
        <>
         <div>
            <NavBar/>
            <div style={{height:'auto', width:'65vw', marginLeft:'30vw'}}>
        
                    <div> <Link to='/room_home'><button> Back</button></Link></div>
     
                    <div style={{height:'5vw'}}></div>
                    <div className={RoomHomeStyles.form}>
                        <h2 style={{textAlign:'center'}}>Add Rooms</h2>
                        <p className={RoomHomeStyles.labels}>Room Type</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Sleeps</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Current Price</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Facilities</p>
                        <input type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Description</p>
                        <textarea type='text' className={RoomHomeStyles.inputs}/> <br/>
                        <p className={RoomHomeStyles.labels}>Image</p>
                        <input type='file' className={RoomHomeStyles.inputs}/> <br/>
                    </div>
           </div>

            </div>
        </>
    );
}

export default AddRoom;