/* eslint-disable jsx-a11y/alt-text */
import "./sidebar.css";
import Friends from "../../assets/1.png";
import Groups from "../../assets/2.png";
import Market from "../../assets/3.png";
import Watch from "../../assets/4.png";
import Memories from "../../assets/5.png";
import Events from "../../assets/6.png";
import Gaming from "../../assets/7.png";
import Gallery from "../../assets/8.png";
import Videos from "../../assets/9.png";
import Messages from "../../assets/10.png";
import Tutorials from "../../assets/11.png";
import Courses from "../../assets/12.png";
import Fund from "../../assets/13.png";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";
import { Link } from "react-router-dom";
import profile from '../../stories/profile.jpg'
import { useContext } from "react";
import {DarkModeContext } from "../../context/darkModeContext" 
export default function Sidebar() {
  const {dispatch} = useContext(DarkModeContext)
  return (
    <div className="sidebar">
      <div className="sidebarWrapper" style={{borderBottom:'1px solid #aaa'}}>
      <div className="item" >
      <Link to={"/Profile"} style={{display:'flex',textDecoration:'none',color:'#000'}}>
          <img src={profile }className="topbarImg"/>
          <span className="m">Mahmoud_elsheshtawy</span>
          </Link>
            
          </div>
  
      <div className="item" >
            <img src={Friends} alt="" />
            <span>Friends</span>
          </div>
          <div className="item">
            <img src={Groups} alt="" />
            <span>Groups</span>
          </div>
          <div className="item">
            <img src={Market} alt="" />
            <span>Marketplace</span>
          </div>
          <div className="item">
            <img src={Watch} alt="" />
            <span>Watch</span>
          </div>
          <div className="item">
            <img src={Memories} alt="" />
            <span>Memories</span>
          </div>
        </div>
        {/* <hr className="hr"/> */}
        <div className="menu" style={{alignItems:'center',borderBottom:'1px solid #aaa'}} >
          <span style={{marginLeft:"10px"}}>Your shortcuts</span>
          <div className="item">
            <img src={Events} alt="" />
            <span>Events</span>
          </div>
          <div className="item">
            <img src={Gaming} alt="" />
            <span>Gaming</span>
          </div>
          <div className="item">
            <img src={Gallery} alt="" />
            <span>Gallery</span>
          </div>
          <div className="item">
            <img src={Videos} alt="" />
            <span>Videos</span>
          </div>
          <div className="item">
            <img src={Messages} alt="" />
            <span>Messages</span>
          </div>
        </div>
        {/* <hr className="hr"/> */}

        <div className="menu"style={{borderBottom:'1px solid #aaa'}}>
          <span style={{marginLeft:"10px"}}>Others</span>
          <div className="item">
            <img src={Fund} alt="" />
            <span>Fundraiser</span>
          </div>
          <div className="item">
            <img src={Tutorials} alt="" />
            <span>Tutorials</span>
          </div>
          <div className="item">
            <img src={Courses} alt="" />
            <span>Courses</span>
          </div>
          <button onClick={() => dispatch({ type: "TOGGLE" })} className="sidebarButton">swich</button>
          <Link to={'/Login'}><button className="sidebarButton"> loge-out</button></Link>
        </div>
      
        
        {/* <hr className="hr"/> */}

        <ul className="sidebarFriendList" style={{marginLeft:'-25px'}}>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
   
  );
}
