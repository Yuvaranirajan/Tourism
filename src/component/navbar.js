import React from "react";
import { Link } from "react-router-dom";
import {BiMenu} from 'react-icons/bi';
import {GrFormClose} from 'react-icons/gr';
import './navbarstyle.css';
export default class Navbar extends React.Component{
    state={clicked: false};
    handleClick = () =>{
           this.setState({clicked: !this.state.clicked})
    }
    render(){
      const MenuItems=[
        {
          id: 1,
          title: "Home",
          url: "/",
          cName: "navLinks",
        },
        {
          id: 2,
          title: "Packages",
          url: "/packages",
          cName: "navLinks",
          
        },
        {
          id: 3,
          title: "Book",
          url: "/book",
          cName: "navLinks",
        },
        {
          id: 4,
          title: "Services",
          url: "/services",
          cName: "navLinks",
        },
        {
          id: 5,
          title: "Gallery",
          url: "/gallery",
          cName: "navLinks",
        },
        {
          id: 6,
          title: "Review",
          url: "/review",
          cName: "navLinks",
        },
        {
          id: 7,
          title: "Contact",
          url: "/contact",
          cName: "navLinks",
        },
      ];

        return(
          <div className="navbar">
            <nav>
                <h1 className="nav-logo">Tourism</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                  {this.state.clicked ?  <GrFormClose className="nav-icon"/> : <BiMenu className="nav-icons"/>}
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                  {MenuItems.map((item) =>{
                    return(
                    <li key={item.id}><Link to={item.url} className={item.cName}>{item.title}</Link></li>);
                  })}
                  
                </ul>
                
            </nav>
  
          </div>
        );
    }
    
}