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
import profile from '../../stories/profile.jpg'
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft" style={{display:"flex" ,alignItems:'center'}}>
        <Link to={'/'} style={{textDecoration:'none' }} >
        <span className="logo" style={{padding:'7px',fontSize:'20px',marginRight:'15px'}}>SH </span>
        </Link>
        <div class="container-input">
          <input type="text" placeholder="Search" name="text" class="input"/>
           <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
             </svg>
</div>
      </div>
      <div className="topbarCenter" style={{display:'flex',alignItems:'center',padding:'4px',position:'relative'}}>
               <div className="icoon"style={{cursor:'pointer'}} >
               <Link to={'/'} style={{textDecoration:'none'}}> <HomeIcon className="icon-nav"style={{textDecoration:'none',color:'blue'}}/></Link>
                <OndemandVideoIcon className="icon-nav"/>
                <StorefrontIcon className="icon-nav"/>
                <GroupsIcon className="icon-nav"/>
                <VideogameAssetIcon className="icon-nav"/>
               </div>
      </div>
      <div className="topbarRight" style={{ display:'flex' ,alignItems:'center',justifyContent:'flex-end'}}>
       
     
          
                 <div className="r" style={{ color:'#000',display:'flex' ,alignItems:'center',justifyContent:'flex-end',marginRight:'20px'}}>
                 <NotificationsIcon className="icon-right"/>
                  <MessageIcon className="icon-right"/>
                  <AppsIcon className="icon-right"/>
                  <Link to={"/Profile"}>
                     <img src={profile }className="topbarImg" alt="my-profile"/>
               </Link>
                 </div>
                
        </div>
         
    
      
        
        
      </div>

  );
}
