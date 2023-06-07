import Footer from "../component/Footer";
import Navbar from "../component/navbar";
import homeVideo from "../assets/video3.mp4";
import "./homeStyle.css";
import Packages from "./Packages";
import PackageCard from "../component/packageCard";
import '../component/packageCardStyle.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import Package1 from '../assets/pack1.jpg';
import Package2 from '../assets/pack2.webp';
import Package3 from '../assets/pack3.jpeg';
import { Link } from "react-router-dom";
export default function Home(){
    return(
       <div className="home">
        <Navbar/>
        <video src={homeVideo} muted autoPlay loop type="video/mp4" />
        <h1 className="home-head">Make Your Moment Unforgettable</h1>
        <p className="home-text">"FILL YOUR LIFE WITH ADVENTURES, NOT THINGS. HAVE STORIES TO TELL NOT STUFF TO SHOW.”<br/>
             – ANONYMOUS</p>
         <h2>Most Popular Destination</h2>
         <p className="home-text01">Make your destination by choosing the popular packages</p>
         <div className="home-pack">
         <PackageCard cardImage={Package1} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Taj Mahal" cardDetail="The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving 
            birth to their 14th child, Gauhara Begum." 
              amount="$90,00" />
           <PackageCard cardImage={Package2} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Eiffel Tower" cardDetail="The tower has three levels for visitors, with restaurants on the first
            and second levels. The top level's upper platform is 276 m  above the ground – the highest 
            observation deck  " amount="$90,00"/>
            <PackageCard cardImage={Package3} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Pyramids" cardDetail="The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified  Egyptian pyramids.
            Approximately 80 pyramids were built within the Kingdom of Kush. " amount="$90,00"/>   
            </div> 
            <div className="home-book-container">
                <div className="home-book">
                    <h3>
                        Plan Your Holidays as to Explore and Enjoy.
                    </h3>
                    <p>“Traveling is a brutality. It forces you to trust strangers and to lose sight of all that familiar comfort of home and friends. You are constantly off balance. Nothing is yours except the essential things — air, sleep, dreams, the sea, the sky — all things tending towards the eternal or what we imagine of it.” – Cesare Pavese</p>
                    <p>For Booking your packages</p>
                    <Link to="/book"><button>Book Now</button></Link>
                </div>
            </div>  
        <Footer/>
       </div> 
    );
}