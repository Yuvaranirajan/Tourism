import Footer from "../component/Footer";
import Main from "../component/main";
import Navbar from "../component/navbar";
import PackageCard from "../component/packageCard";
import "./PackagesStyle.css" ;
import '../component/packageCardStyle.css';
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import Package1 from '../assets/pack1.jpg';
import Package2 from '../assets/pack2.webp';
import Package3 from '../assets/pack3.jpeg';
import Package4 from '../assets/pack4.jpg';
import Package5 from '../assets/pack5.jpg';
import Package6 from '../assets/pack6.jpg';
import packageImg from '../assets/package.jpg';
export default function Packages(){
    return(
        
        <div className="packageContainer">
            <Navbar/>
            <Main cName01="main-text" title="Popular Destination" text="Choose your destination by booking the packages"  mainImage={packageImg} cName="main-content"/>
            <div className="package">
            <PackageCard cardImage={Package1} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Taj Mahal" cardDetail="The Taj Mahal was commissioned by Shah Jahan in 1631, to be built in the memory of his wife Mumtaz Mahal, who died on 17 June that year, while giving 
            birth to their 14th child, Gauhara Begum." 
              amount="$90,00" />


           <PackageCard cardImage={Package2} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Eiffel Tower" cardDetail="The tower has three levels for visitors, with restaurants on the first
            and second levels. The top level's upper platform is 276 m  above the ground – the highest 
            observation deck  " amount="$90,00"/> 
           <PackageCard cardImage={Package3} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Pyramids" cardDetail="The Egyptian pyramids are ancient masonry structures located in Egypt. Sources cite at least 118 identified  Egyptian pyramids.
             " amount="$90,00"/>    

              <PackageCard cardImage={Package4} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Thanjai Periya Kovil" cardDetail=" It is one of the largest Hindu temples and an 
              exemplar of Tamil architecture. It is also called Dakshina Meru (Meru of the South). Built by Chola emperor Rajaraja I between 1003 and 1010 CE.
                " amount="$90,00"/>
                 <PackageCard cardImage={Package5} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Meenakshi Temple" cardDetail="Meenakshi Sundaraswarar Temple is a historic Hindu temple located on the 
                 southern bank of the Vaigai River in the temple city of Madurai, Tamil Nadu, India.  and seashell fragments cover beaches." amount="$90,00"/>
                   <PackageCard cardImage={Package6} star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} cardTitle="Beach" cardDetail="A beach is a narrow, gently sloping strip of land that lies along 
                   the edge of an ocean, lake, or river. Materials such as sand, pebbles, rocks, and seashell fragments cover beaches.
" amount="$90,00"/>
</div>
<Footer/>
        </div>
    );
}