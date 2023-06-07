import Footer from "../component/Footer";
import Main from "../component/main";
import Navbar from "../component/navbar";
import '../component/mainStyle.css';
import galleryImage from '../assets/gallery.webp';
import galleryImage1 from '../assets/gallery1.jpeg';
import galleryImage2 from '../assets/gallery2.jpeg';
import galleryImage3 from '../assets/gallery3.jpeg';
import galleryImage4 from '../assets/gallery4.jpeg';
import galleryImage5 from '../assets/gallery5.jpeg';
import galleryImage6 from '../assets/gallery6.jpeg';
import galleryImage7 from '../assets/gallery7.jpeg';
import galleryImage8 from '../assets/gallery8.jpeg';
import galleryImage9 from '../assets/gallery9.jpeg';
import './GalleryStyle.css';
import { Link } from "react-router-dom";

export default function Gallery(){
    return(
        <div className="Gallery">
            <Navbar/>
            <Main mainImage={galleryImage} title="Gallery" text="Popular places to explore and travel around the world" cName="main-content" cName01="main-text"/>
            <div className="gallery-container">
                <div className="gallery-content">

                    {/* gallery */}
                    <div class="container">
                    <img src={galleryImage1}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>
                    

                    <div class="container">
                    <img src={galleryImage2}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>

                    <div class="container">
                    <img src={galleryImage3}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>

                    <div class="container">
                    <img src={galleryImage4}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>
                    
                    <div class="container">
                    <img src={galleryImage5}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>
                    
                    <div class="container">
                    <img src={galleryImage6}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>

                    <div class="container">
                    <img src={galleryImage7}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div>
                   
                    <div class="container">
                    <img src={galleryImage8}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div> 
                   
                    <div class="container">
                    <img src={galleryImage9}/>
                    <div class="overlay">
                   <div class="text">
                    <p>Amazing Places explore Now</p>
                    <Link to="/book"><button>Book Now</button></Link>
                    </div>
                    </div>
                    </div> 
                   
                </div>
            </div>
            <Footer/> 
        </div>
    );
}