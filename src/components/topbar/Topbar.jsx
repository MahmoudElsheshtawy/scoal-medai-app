/* eslint-disable jsx-a11y/alt-text */
import "./topbar.css";
import AppsIcon from '@mui/icons-material/Apps';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupsIcon from '@mui/icons-material/Groups';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';
import HomeIcon from '@mui/icons-material/Home';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import profile from '../../stories/profile.jpg'
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {DarkModeContext } from "../../context/darkModeContext" 

export default function Topbar() {
    const [nav ,setNav]=useState(true)
    const [state,setState]=useState(true)

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft" style={{display:"flex" ,alignItems:'center'}}>
        <Link to={'/'} style={{textDecoration:'none' }} >
        <span className="logo" style={{padding:'7px',fontSize:'20px',marginRight:'15px'}}>SH </span>
        </Link>
        <div class="container-input">
          <input type="text" placeholder="Search" name="text" className="input"/>
           <svg className="iconsearch" fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
             </svg>
</div>
      </div>
      <div className="topbarCenter" >
               <div className="icoon"style={{cursor:'pointer'}} >
               <Link to={'/'} style={{textDecoration:'none'}}> <HomeIcon className="icon-nav"style={{textDecoration:'none',color:'blue'}}/></Link>
                <OndemandVideoIcon className="icon-nav"/>
                <StorefrontIcon className="icon-nav"/>
                <GroupsIcon className="icon-nav"/>
                <VideogameAssetIcon className="icon-nav"/>
               </div>
      </div>
      <div className="topbarRight" style={{ display:'flex' ,alignItems:'center',justifyContent:'flex-end'}}>
       
     
          
                 <div className={nav ? 'r active':'r'} style={{ marginRight:'10px'}}>
                <div onClick={()=>setState(!state)} style={{display:'flex'}}>
                     <Brightness7Icon  className="icon-right" />
                </div>
                 <NotificationsIcon onClick={()=>setNav(!nav)} className="icon-right"/>
                  <MessageIcon onClick={()=>setNav(!nav)} className="icon-right"/>
                  <AppsIcon onClick={()=>setNav(!nav)} className="icon-right appp"/>
                  <Link onClick={()=>setNav(!nav)} to={"/Profile"}>
                     <img onClick={()=>setNav(!nav)} src={profile }className="topbarImg" alt="my-profile"/>
                 </Link>
             
                 </div>
                 <div onClick={()=>setNav(!nav)}>
                 {nav ? < CloseIcon className="menu"/> :<MenuIcon className="menu"/>}
                  </div>
                
        </div>
         
    
      
        
        
      </div>

  );
}
