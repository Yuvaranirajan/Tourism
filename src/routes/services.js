import Navbar from "../component/navbar";
import hotelImage from "../assets/5-stars.png";
import foodImage from "../assets/dish.png";
import safetyImage from "../assets/patient.png";
import earthImage from "../assets/earth.png";
import travelImage from "../assets/airplane.png";
import exploreImage from "../assets/family.png";
import Footer from "../component/Footer";
import Main from "../component/main";
import servicesImg  from '../assets/Services.jpeg';
import './servicesStyle.css';

export default function Services(){
    const Details=[
        {
            id:1,
            image:hotelImage,
            title:"Affordable Hotels",
            Description:"No holiday is complete without the right hotel. If you are looking to plan an unforgettable trip  you will need to find the right place to stay. Learn how you can book the right hotel for your needs whether you are taking the family on holiday travelling with some one special or just taking some time away for yourself.",
        },
        {
            id:2,
            image:foodImage,
            title:"Healthy Food",
            Description:"The goal is to ensure that guests are satisfied with the food and beverages they receive and that their overall dining experience is enjoyable. Hotels strive to provide high-quality service, tasty food, and excellent customer service.Use the restaurant to help travellers understand local customs Create two entrances, one through the hotel and one from the street."
        },
        {
            id:3,
            image:safetyImage,
            title:"Safety Guide",
            Description:"When you check in at a hotel or hostel, ask for recommendations about which neighborhoods are safe and which are not so safe and mark places to avoid on your map.ou should always pay attention to what's going on around you, whether you are in a crowded tourist spot or walking down an empty street. Would-be offenders often seek out people who are distracted or disengaged from their surroundings to target"
        },
        {
            id:4,
            image:earthImage,
            title:"Around The World",
            Description:"The most economical way to circumnavigate the globe is to buy a round-the-world (RTW) plane ticket through a single airline alliance. These are confederations of several different airlines that make it simple to maximize the number of places you can travel and pay for it all in one place or with points. There are three primary airline alliances to choose from: Star Alliance, OneWorld and Skyteam"

        },
        {
            id:5,
            image:travelImage,
            title:"Fastest Travel",
            Description:"Once you pick an airline alliance, whether because of a loyalty program you’re already a member of or because you like its terms, conditions and destination list, you can purchase a single RTW airline ticket made up of several legs fulfilled by that alliance’s partners. The RTW ticket rules vary between each of the airline alliances, with particulars like Star Alliance’s rule that a RTW ticket can include two to 15 stops.",
        },
        {
            id:6,
            image:exploreImage,
            title:"Adventures",
            Description:"An adventure is an exciting experience or undertaking that is typically bold, sometimes risky.[1] Adventures may be activities with danger such as traveling, exploring, skydiving, mountain climbing, scuba diving, river rafting, or other extreme sports. Adventures are often undertaken to create psychological arousal or in order to achieve a greater goal, such as the pursuit of knowledge that can only be obtained by such activities",
        }
    ];
    return(
        <div className="services">
            <Navbar/>
            <Main cName01="main-text" title="Services" text="services provided by us to the customers" cName="main-content" mainImage={servicesImg}/>
            <div className="services-container">
                {Details.map((item)=>
                <div className="services-content" key={item.id}>
                    <img src={item.image}/>
                    <div className="card">
                        <h1>{item.title}</h1>
                        <p>{item.Description}</p>
                    </div>
                </div>
                )}
        
            </div>
            <Footer/>
        </div>
    );
}