import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import user6 from '../../stories/user6.jpg'
import user5 from '../../stories/user5.jpg'
import user7 from '../../stories/user7.jpg'
import user8 from '../../stories/user8.jpg'
import user9 from '../../stories/user9.jpg'
import user10 from '../../stories/user10.jpg'

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <div className="right-bar">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birhday today.
          </span>
        </div>
        <img className="rightbarAd" src="assets/ad.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue"> Cairo</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">saft elhorya</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship:</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src={user10}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">sayed eldow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={user6}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">abas eldow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={user7}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> methat eldow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={user5}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> mariam eldow</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={user8}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src={user9}
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName"> sena </span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
