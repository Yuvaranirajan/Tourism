import './packageCardStyle.css';
import { Link } from 'react-router-dom';
export default function PackageCard(props){
    return(
        <div className='pack-container'>
        <div className="pack-card">
            <div className="card-image">
                <img src={props.cardImage}/>
            </div>
            <div className="card-content">
                <h1>{props.cardTitle}</h1>
                <p>{props.cardDetail}</p>
                <span>{props.star}</span>
                <h3>{props.amount}</h3>
                <Link to="/book"><button>Book Now</button></Link>
            </div>
        </div>
        </div>
    );
}