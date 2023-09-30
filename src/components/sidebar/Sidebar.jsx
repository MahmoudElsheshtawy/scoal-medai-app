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
import { useState } from "react";
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
export default function Sidebar() {
  const [side,setSide]=useState(false)

  return (
    <>
   
    <div onClick={()=>setSide(!side)} className="show" >
          {/* <ArrowRightIcon/> */}
          {side ? < ArrowLeftIcon className="menu"/> :<ArrowRightIcon className="menu"/>}
          {/* <ArrowLeftIcon/> */}
        </div>
    <div className={side ? 'sidebar active':'sidebar'}>
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
           
         <div className="side-buttom" style={{marginLeft:'10px'}}>
          <Link to={'/Login'}><button className="Btn">
                        
                        <div className="sign"><svg viewBox="0 0 512 512"><path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"></path></svg></div>
                        <div className="text">Logout</div>
                      </button>  
        </Link>
         </div>
        </div>
      
        
        {/* <hr className="hr"/> */}

        <ul className="sidebarFriendList" style={{marginLeft:'-25px'}}>
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      
      </div>
      </>
  );
}
