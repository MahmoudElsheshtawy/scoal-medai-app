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
// import BedtimeIcon from '@mui/icons-material/Bedtime';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
import profile from '../../stories/profile.jpg'
// import WidgetsIcon from '@mui/icons-material/Widgets';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import {DarkModeContext } from "../../context/darkModeContext" 

export default function Topbar() {
    const [nav ,setNav]=useState(false)
    const [state,setState]=useState(true)

  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className="topbarContainer">
      <div className="topbarLeft" style={{display:"flex" ,alignItems:'center'}}>
        <Link to={'/'} style={{textDecoration:'none' }} >
        <span className="logo" style={{padding:'7px',fontSize:'20px',marginRight:'15px'}}>SH </span>
        </Link>
        <div class="container-input">
        
          <input type="search" placeholder="Search" name="text" className="input"/>
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
                <div class="theme-switch">
                    <input onClick={() => dispatch({ type: "TOGGLE" })} type="checkbox" id="theme-checkbox"/>
                    <label for="theme-checkbox">
                   <div></div>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                   <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd"></path>
               </svg>
               </span>
                       <span>
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                      </span>
                  </label>
             </div>
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
