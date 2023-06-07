import contactImage from '../assets/Contact.jpg'
import form from '../assets/contact-Form-Image.webp'
import Footer from '../component/Footer';
import Main from '../component/main';
import Navbar from '../component/navbar';
import '../component/mainStyle.css';
import './contactStyle.css';
export default function Contact(){
    return(
        <div className="contact">
            <Navbar/>
            <Main mainImage={contactImage} title="Contact Us" text="For any query or information you can contact with us" cName="main-content" cName01="main-text"/>
            <div className="contact-content">
                <div className='contact-container'>
                    <img src={form}/>
    
                <form>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Email"/>
                    <input type="text" placeholder="Subject"/>
                    <textarea placeholder='Messages'></textarea>
                    <button>Send Message</button>
                </form>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}