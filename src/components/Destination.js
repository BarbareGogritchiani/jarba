import React from 'react';
import taal from "../assets/taalVolcano.jpg";
import taal2 from "../assets/taalVolc2.jpg";
import mount1 from "../assets/mountain.jpg";
import mount2 from "../assets/mountain1.jpg";
import "./DestinationStyle.css";
import DestinationData from './DestinationData';
function Destination (){

    return (
    <>
    <div className='destination'>
        <h1>O saqartvelos niavo</h1>
        <p>uime</p>

        <DestinationData clsName="first-des"
        heading="Tusheti & Khevsureti"
       img1={taal} img2={taal2} />

       <DestinationData clsName="first-des-reverse"
        heading="Racha & Svaneti"
       img1={mount1} img2={mount2} />


    </div>
    
    </>
    )
}
export default Destination;





