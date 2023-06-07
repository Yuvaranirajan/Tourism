import {GrYoutube,GrLinkedin,GrInstagram} from 'react-icons/gr';
import {FaFacebook} from 'react-icons/fa';
import "./FooterStyle.css";
export default function Footer(){
    return(
       <div className="footer">
           <div className="footer-content">
              <div className="head-content">
                <h1>Tourism</h1>
                <p>choose your destiny where you can explore the places</p>
              </div>
              <div className="social-media">
               
               <a href='#'><p><GrLinkedin/></p></a>
               <a href='#'><p><GrInstagram/></p></a>
               <a href='#'><p><FaFacebook/></p></a>
               <a href='#'><p><GrYoutube/></p></a>
              </div>
           </div>
           <div className='footer-list'>
               <div className='list01'>
                 <h2>Project</h2>
                 <a href='#'><p>Changelog</p></a>
                 <a href='#'><p>Status</p></a>
                 <a href='#'><p>License</p></a>
                 <a href='#'><p>All Versions</p></a>
               </div>
               <div className='list02'>
                 <h2>Community</h2>
                 <a href='#'><p>Issues</p></a>
                 <a href='#'><p>Project</p></a>
                 <a href='#'><p>Twitter</p></a>
                 <a href='#'><p>GitHub</p></a>
               </div>
               <div className='list03'>
                 <h2>Help</h2>
                 <a href='#'><p>Support</p></a>
                 <a href='#'><p>Troubleshooting</p></a>
                 <a href='#'><p>Contact Us</p></a>
               </div>
               <div className='list03'>
                 <h2>Others</h2>
                 <a href='#'><p>Terms of Services</p></a>
                 <a href='#'><p>privacy Policy</p></a>
                 <a href='#'><p>License</p></a>
               </div>
           </div>
       </div>
    );
}