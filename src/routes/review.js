import Footer from "../component/Footer";
import Navbar from "../component/navbar";
import Main from "../component/main";
import '../component/mainStyle.css';
import testimonialImage from '../assets/testimonials.jpg'
import { AiFillStar, AiOutlineStar} from 'react-icons/ai';
import profile1Image from '../assets/profile1.webp';
import profile2Image from '../assets/profile2.webp';
import profile3Image from '../assets/profile3.webp';
import profile4Image from '../assets/profile4.webp';
import './reviewStyle.css';
export default function Review(){
    return(
        <div className="review">
            <Navbar/>
            <Main cName01="main-text" title="Testimonials" text="What our customers say about us" mainImage={testimonialImage} cName="main-content"/>
            <div className="review-container">
            <Main cName01="review-text" title="Juli M."  star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} text="The trip was wonderful - lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned..... Wine country was fun - Penny even learned to enjoy good red wine. We toured Pear Harbor, the Dole plantation and the north shore on Oahu. On Maui we enjoyed the pool and beach, the LeLe Luau was outstanding, I play the Kaanapali Kai golf course, shopping in Lahaina, lots of great dinners/mai tais and just cruising around the island made the time pass too quickly." mainImage={profile1Image} cName="review-content"/>
            <Main cName01="review-text" title="Anni S." star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>} text="The trip was wonderful - lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned..... Wine country was fun - Penny even learned to enjoy good red wine. We toured Pear Harbor, the Dole plantation and the north shore on Oahu. On Maui we enjoyed the pool and beach, the LeLe Luau was outstanding, I play the Kaanapali Kai golf course, shopping in Lahaina, lots of great dinners/mai tais and just cruising around the island made the time pass too quickly." mainImage={profile2Image} cName="review-content"/>
            <Main cName01="review-text" title=" Laura T." star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></>} text="The trip was wonderful - lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned..... Wine country was fun - Penny even learned to enjoy good red wine. We toured Pear Harbor, the Dole plantation and the north shore on Oahu. On Maui we enjoyed the pool and beach, the LeLe Luau was outstanding, I play the Kaanapali Kai golf course, shopping in Lahaina, lots of great dinners/mai tais and just cruising around the island made the time pass too quickly." mainImage= {profile3Image} cName="review-content"/>
            <Main cName01="review-text" title="Annu R." star={<><AiFillStar/> <AiFillStar/><AiFillStar/><AiFillStar/><AiOutlineStar/></>} text="The trip was wonderful - lots of great memories were made. All the arrangements (flights, hotels, cars, cab transfers) went as planned..... Wine country was fun - Penny even learned to enjoy good red wine. We toured Pear Harbor, the Dole plantation and the north shore on Oahu. On Maui we enjoyed the pool and beach, the LeLe Luau was outstanding, I play the Kaanapali Kai golf course, shopping in Lahaina, lots of great dinners/mai tais and just cruising around the island made the time pass too quickly." mainImage={profile4Image} cName="review-content"/>
            </div>
            <Footer/>
        </div>
    );

}