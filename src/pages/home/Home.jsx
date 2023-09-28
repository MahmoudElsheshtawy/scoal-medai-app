import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
// import Stories from "../../components/stories/Stories";
import Storiess from "../../components/storiess/Stores";
// import Store from "../../components/storiess/Store";
// import TopCart from '../../components/top/TopCart'
export default function Home() {
  return (
    <>
    {/* <TopCart/> */}
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="feeds" style={{flex:'6'}}>
          
          <Storiess/>
          {/* <Store/> */}
          <Feed/>
        </div>
        
        <Rightbar/>
      </div>
    </>
  );
}
