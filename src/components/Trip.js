import "./TripStyles.css";
import React from "react";
import TripData from "./TripData";
import indonesia from "../assets/adjarabet.jpg";
import malaysia from "../assets/meskhi.jpg";
import france from "../assets/france.jpg";

function Trip() {

    return(
        <>
        <div className="trip">
            <h1>Stadiums</h1>
        
            <div className="tripCard">
            <TripData image={indonesia} tripHead="Adjarabet Arena" tripTxt="Es stadioni xelovnebis niushia "/>

             <TripData tripTxt="Es pataraa mara kaia"
              image={malaysia} tripHead="Mikheil Meskhi Stadium"/>
            
            <TripData tripTxt="Esec shedevria" image={france} tripHead="Boris Paitchadze Dinamo Arena"/>
            </div>
        </div>
        </>
    )
}
export default Trip;