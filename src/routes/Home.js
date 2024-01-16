import Hero from "../components/Hero";
import image from "../assets/travel1.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";
function Home (){


    return (
        <>
        <Hero 
          cName="hero"
          img={image}
          title="Plan Your Adventure With Us"
          url="/"
          btntext = "Chamom Travel"
          btnClass="show" />

          <Destination/>
          <Trip/>
          <Footer/>

        </>
    )

}
export default Home;