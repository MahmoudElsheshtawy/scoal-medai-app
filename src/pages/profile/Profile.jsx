/* eslint-disable jsx-a11y/alt-text */
import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import profile from "../../stories/profile.jpg"
import wallpaper from "../../stories/wallpaper.jpg"
export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={wallpaper}
                alt=""
              />
              <img
                className="profileUserImg"
                src={profile}
               
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Mahmoud_elsheshtawy</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom" style={{marginTop:'2rem'}}>
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
