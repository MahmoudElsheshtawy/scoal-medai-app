import "./share.css";
// import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import profile from '../../stories/profile.jpg';
import { Link } from "react-router-dom";

export default function Share() {
  return (
    <div className="share" style={{marginTop:"2rem"}}>
      <div className="shareWrapper">
        <div className="shareTop">
         <Link to={'/profile'}> <img className="shareProfileImg" src={profile}alt="" /></Link>
          <input
            placeholder="What's in your mind Mahmoud?"
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
        <PermMediaIcon  htmlColor="tomato" className="shareIcon"/> 
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                     <LocalOfferIcon htmlColor="blue" className="shareIcon"/> 
                    <span className="shareOptionText">Tag</span>
                </div>
                <div className="shareOption">
                     <AddLocationIcon htmlColor="green" className="shareIcon"/> 
                    <span className="shareOptionText">Location</span>
                </div>
                <div className="shareOption">
                     <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon"/> 
                    <span className="shareOptionText">Feelings</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
