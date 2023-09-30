import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.css"
import Storiess from "../../components/storiess/Stores";
export default function Home() {
  return (
    <>
      <Topbar />
      <div className="homeContainer">
        <Sidebar />
        <div className="feeds" style={{flex:'6'}}>
          <Storiess/>
          <Feed/>
        </div>
        
        <Rightbar/>
      </div>
    </>
  );
}
